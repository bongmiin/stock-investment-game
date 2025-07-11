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
        정부의 의료 개혁 시행에 
대응하여 의료계에서 대대적인 파업에 나섰습니다.
사회 혼란이 예상됩니다.
      </p>
      
      <NavButton to="step1" label="다음 페이지" className="button" />
    </main>
  );
}