'use client';

import Image from 'next/image';
import NavButton from '@/components/NavButton';

export default function Round1Page() {
  return (
    <main className="inner-content">
      <Image
        src="/r2Title.png" // 퍼블릭 폴더 기준 경로
        alt="라운드 2 타이틀 이미지"
        width={500} 
        height={300} 
        style={{ marginBottom: '1rem', borderRadius: '10px',margin: '0 auto',display: 'block', }}
      />
        <p>
        : 지속적인 국가 간 전쟁 이슈와 미국의 높은 금리 등으로 인해 
국제 경기가 침체하였다.
        </p>
      <NavButton to="/round2/StockInfo" label="다음 페이지" className="button" />
    </main>
  );
}
