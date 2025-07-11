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
        00기업에서 발표한 친환경 에너지 발전 기술의 헛점이 드러났습니다. 발표 내용과 다르게 현재 상용화는 거의 어려운 단계로 앞으로 꾸준한 연구가 필요할 것으로 예상됩니다.
      </p>
      
      <NavButton to="step1" label="다음 페이지" className="button" />
    </main>
  );
}