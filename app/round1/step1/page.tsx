'use client';

import Image from 'next/image';
import NavButton from '@/components/NavButton';

export default function Round1Page() {
  return (
    <main className="inner-content">
      <Image
        src="/r1Title.png" // 퍼블릭 폴더 기준 경로
        alt="라운드 1 타이틀 이미지"
        width={500} 
        height={300} 
        style={{ marginBottom: '1rem', borderRadius: '10px',margin: '0 auto',display: 'block', }}
      />
      <p>
        정부에서 의료 개혁 정책을 발표하여 논란이 예상되고 있다
      </p>
      <NavButton to="/round1/StockInfo" label="다음 페이지" className="button" />
    </main>
  );
}
