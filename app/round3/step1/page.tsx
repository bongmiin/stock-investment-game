'use client';

import Image from 'next/image';
import NavButton from '@/components/NavButton';

export default function Round1Page() {
  return (
    <main className="inner-content">
      <Image
        src="/r3Title.png" // 퍼블릭 폴더 기준 경로
        alt="라운드 2 타이틀 이미지"
        width={500} 
        height={300} 
        style={{ marginBottom: '1rem', borderRadius: '10px',margin: '0 auto',display: 'block', }}
      />
        <p>
        : 국내 경기의 긍정적인 전망으로 주식 시장의 상승이 기대됨
        </p>
      <NavButton to="/round3/StockInfo" label="다음 페이지" className="button" />
    </main>
  );
}
