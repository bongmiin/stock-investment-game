import NavButton from '@/components/NavButton';
import Image from 'next/image';

export default function Round1Page() {
  return (
    <main className="inner-content">
      <Image
        src="/name_news.png" // 퍼블릭 폴더 기준 경로
        alt="라운드 2"
        width={400} 
        height={300} 
        style={{ marginBottom: '1rem', borderRadius: '10px',margin: '0 auto',display: 'block', }}
      />
            <Image
        src="/news.png" // 퍼블릭 폴더 기준 경로
        alt="라운드 2 뉴스"
        width={500} 
        height={300} 
        style={{ marginBottom: '1rem', borderRadius: '10px',margin: '0 auto',display: 'block', }}
      />
      <p className="news-paragraph">
        지속된 고환율의 J커브효과가 나타났습니다. 국내 수출 실적이 크게 상승하여 국내 경제의 긍정적인 전망이 기대됩니다.
      </p>
      
      <NavButton to="step1" label="다음 페이지" className="button" />
    </main>
  );
}