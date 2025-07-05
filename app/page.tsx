"use client"; // 클라이언트 컴포넌트로 지정

import { useRouter } from 'next/router'; // next/router를 사용
import React from 'react';
import './globals.css';

export default function Home() {
  const router = useRouter(); // useRouter 사용

  const handleStartGame = () => {
    router.push('/game-rules'); // 페이지 이동
  };

  return (
    <main>
      <h1>가상 시뮬레이션 투자 게임</h1>
      <p>나도 주식왕!</p>
      <button onClick={handleStartGame}>
        게임 시작하기
      </button>
      <p>게임 개발자: [당신의 이름]</p>
      <p>게임 버전: 1.0.0</p>
    </main>
  );
}
