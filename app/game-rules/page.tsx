'use client';

import React, { useState } from 'react';
import NavButton from '@/components/NavButton';

export default function GameRulesPage() {
  const [mode, setMode] = useState<'basic' | 'advanced' | 'terms'>('basic');

  return (
    <main className="inner-content">
      <div className="team-buttons">
        <button onClick={() => setMode('basic')} className="team-button" >게임 방법</button>
        <button onClick={() => setMode('advanced')} className="team-button">게임 조건</button>
        <button onClick={() => setMode('terms')} className="team-button">주식용어</button>
      </div>

      {mode === 'basic' && (
        <div>
          {[
            '6개 조로 앉아주세요',
            '모둠 당 투자자금 10,000,000원(일천만원) 지급',
            '총 3라운드 진행',
            '국내 주식 매수/매도',
            '3라운드 종료 후 수익이 가장 많은 팀 우승!',
          ].map((text, idx) => (
            <p key={idx} style={{ border: '2px solid black', padding: '0.5rem', margin: '0.5rem 0', borderRadius: '12px' }}>
              {text}
            </p>
          ))}
        </div>
      )}

      {mode === 'advanced' && (
        <div>
          {[
            '제시되는 모든 주식은 실제로 없는 가상의 주식임!',
            '주가에 영향을 주는 경제 상황 또한 가상으로 주어짐',
            '하나의 라운드는 상당한 기간임(수 개월)',
            '정보는 화면에 나오는 설명과 힌트카드가 전부!',
          ].map((text, idx) => (
            <p key={idx} style={{ border: '2px solid black', padding: '0.5rem', margin: '0.5rem 0', borderRadius: '12px' }}>
              {text}
            </p>
          ))}
        </div>
      )}

      {mode === 'terms' && (
        <div>
          {[
            '주가: 주식의 가격을 의미합니다.',
            '매수: 주식을 사는 것',
            '매도: 주식을 파는 것',
            '시가총액: 발행 주식 수 X 주가 = 회사 규모 : 발행 주식 수',
            '주문: 주식을 매수하거나 매도하는 행위입니다.',
          ].map((text, idx) => (
            <p key={idx} style={{ border: '2px solid black', padding: '0.5rem', margin: '0.5rem 0', borderRadius: '12px' }}>
              {text}
            </p>
          ))}
        </div>
      )}

      <NavButton to="/round1" label="라운드 1 시작" className="button" />
    </main>
  );
}
