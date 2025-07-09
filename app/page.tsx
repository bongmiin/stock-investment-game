'use client'; 

import NavButton from '@/components/NavButton'; 
import { useState, useEffect } from 'react';

export default function Home() {

  const [count, setCount] = useState(1);
  useEffect(() => {
    // 이전에 저장된 값 불러오기
    const saved = sessionStorage.getItem('teamCount');
    if (saved) setCount(Number(saved));
  }, []);

  const handleClick = () => {
    sessionStorage.setItem('teamCount', count.toString()); // 💾 저장
  };
  return (
    <main>
      <h1>가상 시뮬레이션 투자 게임</h1>
      <p>나도 주식왕!</p>
      <p>팀 수 입력: </p>
      <input
      type='number'
      min={1}
      value={count}
      onChange={(e) => setCount(Number(e.target.value))}
      />
      <NavButton 
      to="/game-rules" 
      label="게임 규칙"
      onClick={handleClick}
      className="button" />
      <p>원작자 : [사회교사 나무쌤]</p>
      <p>게임 개발자: [김봉민]</p>
      <p>게임 버전: 1.0.0</p>
    </main>
  );
}
