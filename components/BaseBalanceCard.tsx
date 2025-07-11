'use client';

import { useEffect, useState, useRef } from 'react';
import {
  getTeamHoldings,
  updateTeamHoldings,
} from '@/utils/session';
import './BaseBalanceCard.css';

type Props = {
  teamName: string;
  stockPrices: Record<string, number>;
  isFinalRound?: boolean;  // ← 이 줄 추가
};

const INITIAL_FUNDS = 10000000;
const STOCK_NAMES = ['나무바이오', '그린팜', 'LOL전자', '나무자동차', '그린에너지'];

export default function BaseBalanceCard({ teamName, stockPrices, isFinalRound }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [balance, setBalance] = useState(INITIAL_FUNDS);

  // 평가액과 수익률의 이전 값을 기억
  const prevValuationRef = useRef<number>(INITIAL_FUNDS);
  const prevProfitRateRef = useRef<number>(0);

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

  // 이전 값 갱신
  useEffect(() => {
    prevValuationRef.current = totalValuation;
    prevProfitRateRef.current = profitRate;
  }, [totalValuation, profitRate]);

  const getColorStyle = (curr: number, prev: number) => {
    if (curr > prev) return { color: 'red' };
    if (curr < prev) return { color: 'blue' };
    return { color: 'black' };
  };

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
    <div className="balance-card">
      <h2 style={{ fontSize: '2rem' }}>{teamName}</h2>
      {!isFinalRound && (
  <p style={{ fontSize: '2rem' }}>
    예수금: {balance.toLocaleString()}원
  </p>
)}
      <p style={{ ...{ fontSize: '2rem' }, ...getColorStyle(totalValuation, prevValuationRef.current) }}>
      총 평가액: {totalValuation.toLocaleString()}원
      </p>
      <p style={{ ...{ fontSize: '2rem' }, ...getColorStyle(profitRate, prevProfitRateRef.current) }}>
      수익률: {profitRate}%
      </p>

{!isFinalRound && (
  <table style={{ fontSize: '1.2rem' }}>
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
              onChange={(e) =>
                handleQuantityChange(name, parseInt(e.target.value || '0'))
              }
              style={{ fontSize: '1.2rem', width: '5rem' }}
            />주
          </td>
          <td>
            {((quantities[name] ?? 0) * stockPrices[name]).toLocaleString()}원
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}

    </div>
  );
}
