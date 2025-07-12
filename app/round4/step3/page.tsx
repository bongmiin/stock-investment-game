'use client';

import { useEffect, useState } from 'react';
import NavButton from '@/components/NavButton';
import BalanceCard_r4 from '@/components/BalanceCard_r4';
import './page.css';

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
        <h1>최종 결과</h1>

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
        <div className="flex-container">
          {/* 수익률 평가 */}
          <div className="balance-card">
          <div className="box">
            <h2 className="text-4xl font-bold text-green-800 mb-4">모둠별 수익률 평가</h2>
            <p className="text-sm text-right text-gray-600 mb-2">※가상의 게임일 뿐, 현실은 달라요!</p>

            <div className="grid grid-cols-3 gap-4 text-left text-lg font-bold">
              <div className="col-span-1 text-gray-800">최대 가능 손실률</div>
              <div className="col-span-2 text-blue-700">-64% (-6,410,000원)</div>

              <div className="col-span-1 text-blue-700">-25% 이하</div>
              <div className="col-span-2 text-blue-700">마이너스의 손</div>

              <div className="col-span-1 text-blue-700">-25% ~ 0%</div>
              <div className="col-span-2 text-blue-700">운 없는 투자자</div>

              <div className="col-span-3">
                <hr className="my-2 border-gray-400" />
              </div>

              <div className="col-span-1 text-gray-800">0% ~ +11%</div>
              <div className="col-span-2 text-gray-700">안전한 투자자</div>

              <div className="col-span-1 text-gray-800">+10% ~ +30%</div>
              <div className="col-span-1 text-gray-700">나이스 투자자</div>
              <div className="col-span-1 text-green-800 font-extrabold">시장 평균 수익률</div>
              <div className="col-span-3">
              <hr className="my-2 border-gray-400" />
              </div>
              <div className="col-span-1 text-red-600">+30% ~ +80%</div>
              <div className="col-span-2 text-red-600">감좋은 투자자</div>

              <div className="col-span-1 text-red-600">+80% 이상</div>
              <div className="col-span-2 text-red-600">신의 손</div>

              <div className="col-span-1 text-gray-800">최대 가능 수익률</div>
              <div className="col-span-2 text-red-600">+171% (+17,050,000원)</div>
            </div>
          </div>
          </div>

      <div>
            <BalanceCard_r4 
            teamName={selectedTeam}  />
</div>
        </div>

        <NavButton to="/" label="메인화면으로" className="button" />
      </div>
    </main>
  );
}
