'use client'; 

import Image from 'next/image';
import NavButton from '@/components/NavButton'; 

export default function Home() {

  return (
    <main className="inner-content">
      <p>가상 시뮬레이션 투자 게임</p>
        <Image 
        src="/title.png" 
        alt="나도 주식왕!" 
        width={800} // 필요에 따라 조정
        height={520}
        priority
      />
 
<div className='balance-card'>
      <p>원작자 : [사회교사 나무쌤]</p>
      <p>게임 개발자: [김봉민]</p>
      <p>게임 버전: 1.0.0</p>
      </div>

           <NavButton
  to="/game-rules"
  label="게임 규칙"
  className="button right-align"
/>
    </main>
  );
}
