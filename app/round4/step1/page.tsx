'use client';

import Image from 'next/image';
import NavButton from '@/components/NavButton';

export default function Round1Page() {
  return (
    <main className="inner-content">
      <Image
        src="/r4Title.png" // 퍼블릭 폴더 기준 경로
        alt="라운드 2 타이틀 이미지"
        width={500} 
        height={300} 
        style={{ marginBottom: '1rem', borderRadius: '10px',margin: '0 auto',display: 'block', }}
      />
        <p>
        : 미국과 한국이 드디어 금리 인하를 시작하여 향후 저금리 기대로 주식시장의 호황이 예상되고, 정부의 ESG 정책 투자가 확대됨
        </p>
      <NavButton to="StockInfo" label="다음 페이지" className="button" />
    </main>
  );
}
