'use client';

import { useEffect, useState } from 'react';
import {
  getTeamHoldings,
  updateTeamHoldings,
} from '@/utils/session';

type Props = {
  teamName: string;
  stockPrices: Record<string, number>;
};

const INITIAL_FUNDS = 10000000;
const STOCK_NAMES = ['나무바이오', '그린팜', 'LOL전자', '디지털팜', '스마트팜에너지'];

export default function BaseBalanceCard({ teamName, stockPrices }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [balance, setBalance] = useState(INITIAL_FUNDS);

  useEffect(() => {
    const data = getTeamHoldings();
    const team = data[teamName] || {
      balance: INITIAL_FUNDS,
      stocks: Object.fromEntries(STOCK_NAMES.map((name) => [name, 0])),
    };

    setBalance(team.balance);
    setQuantities(team.stocks);
  }, [teamName]);

  const investedAmount = STOCK_NAMES.reduce(
    (sum, name) => sum + (quantities[name] ?? 0) * (stockPrices[name] ?? 0),
    0
  );

  const totalValuation = balance + investedAmount;
  const profitRate =
    Math.round(((totalValuation - INITIAL_FUNDS) / INITIAL_FUNDS) * 10000) / 100;

  const handleQuantityChange = (name: string, newQty: number) => {
    const oldQty = quantities[name] ?? 0;
    const price = stockPrices[name];
    const qtyDiff = newQty - oldQty;
    const cost = qtyDiff * price;
    const newBalance = balance - cost;

    if (newBalance < 0) {
      alert('예수금 부족');
      return;
    }

    const updated = { ...quantities, [name]: newQty };
    setQuantities(updated);
    setBalance(newBalance);

    updateTeamHoldings(teamName, {
      balance: newBalance,
      stocks: updated,
    });
  };

  return (
    <div style={{ border: '1px solid gray', padding: '1rem', marginBottom: '2rem' }}>
      <h2>{teamName}</h2>
      <p>예수금: {balance.toLocaleString()}원</p>
      <p>총 평가액: {totalValuation.toLocaleString()}원</p>
      <p>수익률: {profitRate}%</p>

      <table>
        <thead>
          <tr>
            <th>종목</th>
            <th>현재가</th>
            <th>보유 수량</th>
            <th>평가 금액</th>
          </tr>
        </thead>
        <tbody>
          {STOCK_NAMES.map((name) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{stockPrices[name].toLocaleString()}원</td>
              <td>
                <input
                  type="number"
                  min={0}
                  value={quantities[name] ?? 0}
                  onChange={(e) => handleQuantityChange(name, parseInt(e.target.value || '0'))}
                />
              </td>
              <td>
                {((quantities[name] ?? 0) * stockPrices[name]).toLocaleString()}원
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
