import NavButton from '@/components/NavButton';

export default function Round1Page() {
  return (
    <main>
      <h1>경제 상황</h1>
      <p>드디어 도래한 포스트 팬데믹의 시대!</p>
      <NavButton to="/game/round1/step1" label="다음 페이지" className="button" />
    </main>
  );
}