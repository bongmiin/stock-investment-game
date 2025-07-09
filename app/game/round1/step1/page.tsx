import NavButton from '@/components/NavButton';

export default function Round1Page() {
  return (
    <main>
      <h1>1라운드</h1>
      <p>정부에서 의료 개혁 정책을 발표하여 논란이 예상되고 있다</p>
      <NavButton to="/game/round1/StockInfo" label="다음 페이지" className="button" />
    </main>
  );
}