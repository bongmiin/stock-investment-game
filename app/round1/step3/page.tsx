'use client';

import BalanceCard_r1 from '@/components/BalanceCard_r1'; // 💡 라운드 1용 컴포넌트
import NavButton from '@/components/NavButton';
import StockCard from '@/components/StockCard';
import { useEffect } from 'react';

const stocks = [
  { id: 1, name: '나무바이오', price: '10만원', qty: '20주', total: '200만원' },
  { id: 2, name: '그린팜', price: '5만원', qty: '40주', total: '200만원' },
  { id: 3, name: 'LOL전자', price: '4만원', qty: '50주', total: '200만원' },
];

export default function Page() {
  useEffect(() => {
    const saved = sessionStorage.getItem('teamData');
    if (!saved) {
      const teamData: Record<string, any> = {};
      for (let i = 1; i <= 6; i++) {
        teamData[`${i}조`] = {
          balance: 10000000,
          valuation: 10000000,
          profitRate: 0,
          stocks: [], // round1에서 buy 시작하므로 초기값은 빈 배열
        };
      }
      sessionStorage.setItem('teamData', JSON.stringify(teamData));
    }
  }, []);

  return (
    <main>
      <h1>📈 주식 종목</h1>
      {stocks.map((stock) => (
        <StockCard key={stock.id} stock={stock} />
      ))}

      <h1>💰 STEP 3: 잔고 계산</h1>
      <BalanceCard_r1 teamName="1조" />
      <BalanceCard_r1 teamName="2조" />
      <BalanceCard_r1 teamName="3조" />
      <BalanceCard_r1 teamName="4조" />
      <BalanceCard_r1 teamName="5조" />
      <BalanceCard_r1 teamName="6조" />

      <NavButton to="/emoji" label="다음 페이지" className="button" />
    </main>
  );
}
