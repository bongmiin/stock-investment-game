import NavButton from '@/components/NavButton';
import StockViewer from "@/components/StockViewer";


const stocks = [
  { id: 1, name: '나무바이오', desc: '...', price: '10만원', icon: '/namuBio.png' },
  { id: 2, name: '그린팜', desc: '...', price: '5만원', icon: '/greenParm.png' },
];

export default function Page() {
  return (
    <main className="inner-content">
      <StockViewer stocks={stocks} />
      <NavButton to="/round1/step3" label="투자 시작" className="button" />
    </main>

  );
}