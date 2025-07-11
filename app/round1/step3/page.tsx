'use client';

import { useEffect, useState } from 'react';
import NavButton from '@/components/NavButton';
import StockCard from '@/components/StockCard';
import BalanceCard_r1 from '@/components/BalanceCard_r1';

import './page.css';

const stocks = [
  { id: 1, name: '나무바이오', price: '10만원', qty: '20주', total: '200만원' },
  { id: 2, name: '그린팜', price: '5만원', qty: '40주', total: '200만원' },
  { id: 3, name: 'LOL전자', price: '4만원', qty: '50주', total: '200만원' },
  { id: 4, name: '나무자동차', price: '20만원', qty: '10주', total: '200만원' },
  { id: 5, name: '그린에너지', price: '25만원', qty: '8주', total: '200만원' },
];

export default function Page() {
  const [selectedTeam, setSelectedTeam] = useState('1조');

  useEffect(() => {
    const saved = sessionStorage.getItem('teamData');
    if (!saved) {
      const teamData: Record<string, any> = {};
      for (let i = 1; i <= 6; i++) {
        teamData[`${i}조`] = {
          balance: 10000000,
          valuation: 10000000,
          profitRate: 0,
          stocks: [],
        };
      }
      sessionStorage.setItem('teamData', JSON.stringify(teamData));
    }
  }, []);

  return (
    <main className="page-container">
      <div className="balance-card">
      <h1>1라운드 개장</h1>

      <div className="team-buttons">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            className={`team-button ${selectedTeam === `${num}조` ? 'active' : ''}`}
            onClick={() => setSelectedTeam(`${num}조`)}
          >
            {num}조
          </button>
        ))}
      </div>
      {stocks.map((stock) => (
        <StockCard key={stock.id} stock={stock} />
        ))}
        <BalanceCard_r1 teamName={selectedTeam} />
        <NavButton to="/emoji" label="1라운드 종료" className="button" />
      </div>
    </main>
  );
}
