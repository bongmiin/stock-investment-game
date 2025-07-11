'use client';

import React, { useState } from 'react';
import NavButton from '@/components/NavButton';

export default function GameRulesPage() {
  const [mode, setMode] = useState<'basic' | 'advanced'>('basic');

  return (
    <main className="inner-content">
      <h1>게임 규칙</h1>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setMode('basic')} className="button">게임 방법</button>
        <button onClick={() => setMode('advanced')} className="button">게임 조건</button>
      </div>

      {mode === 'basic' && (
        <div>
          <h2>📘 기본 규칙</h2>
          <p>6조로 구성됩니다</p>
        </div>
      )}

      {mode === 'advanced' && (
        <div>
          <h2>📙 고급 규칙</h2>
          <p>여기에 고급 규칙 설명이 들어갑니다.</p>
        </div>
      )}
      <NavButton to="/round1" label="라운드 1 시작" className="button" />
    </main>
  );
}
// 이 페이지는 게임 규칙을 보여주는 페이지입니다.