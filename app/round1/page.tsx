import NavButton from '@/components/NavButton';

export default function Round1Page() {
  return (
    <main>
      <h1>경제 상황</h1>
      <p>드디어 도래한 포스트 팬데믹의 시대!</p>
      <p>감염병 위기가 완전 종식되고 모든 생활이 일상으로 돌아왔다</p>
      <NavButton to="round1/step1" label="다음 페이지" className="button" />
    </main>
  );
}