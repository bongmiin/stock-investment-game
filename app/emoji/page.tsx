'use client'; 

import NavButton from '@/components/NavButton'; 

export default function Page() {

  return (
  <main className="inner-content">
    <h1>이모지 게임</h1>
    <p>이모지 게임 설명</p>
    <NavButton to="emoji/start" label="시작"className="button" />
  </main>
  );
}
