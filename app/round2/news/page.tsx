import NavButton from '@/components/NavButton';

export default function Round1Page() {
  return (
    <main className="inner-content">
      <h1>K뉴스</h1>
      <p>정부의 의료 개혁 시행에 
대응하여 의료계에서 대대적인 파업에 나섰습니다.
사회 혼란이 예상됩니다.</p>
      
      <NavButton to="/round2" label="다음 페이지" className="button" />
    </main>
  );
}