'use client'; 

import NavButton from '@/components/NavButton'; 

export default function Page() {

  return (
  <main className="inner-content">
    <h1>🎵 신나는 노래 맞추기 게임 </h1>
    <p>문제는 총 10문제!</p>
    <p>화면에 노래의 전주(인트로) 또는 가사 일부가 나옵니다.</p>
    <p>이 정보를 바탕으로 노래 제목을 맞추는 게임입니다.</p>
    <p>정답을 아는 팀은 자신의 조 이름을 외치고 손을 들어주세요!</p>
    <p>가장 점수가 높은 2팀에게 힌트가 주어집니다.</p>
    <NavButton to="music/start" label="게임 시작!!"className="button" />
  </main>
  );
}
