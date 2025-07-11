'use client'; 

import NavButton from '@/components/NavButton'; 

export default function Page() {

  return (
  <main className="inner-content">
    <h1>🎉 이모지 퀴즈 (한국 드라마/영화) </h1>
    <p>문제는 총 10문제!</p>
    <p>1. 한국 드라마나 영화 제목을 이모지로 표현한 문제를 화면에 보여줍니다.</p>
    <p>2. 이 이모지가 뜻하는 작품명을 맞추는 게임입니다!</p>
    <p>3. 정답을 아는 사람은 각자 조의 이름을 외치며 손을 번쩍 들어주세요!</p>
    <p>4. 빠르고 정확하게 맞힌 사람에게 포인트를 줍니다!</p>
    <NavButton to="emoji/start" label="게임 시작!!"className="button" />
  </main>
  );
}
