import NavButton from '@/components/NavButton';
import StockCard from '@/components/StockCard';


const stocks = [
    { id: 1, name: '나무바이오', price: '10만원', qty: '20주', total: '200만원' },
    { id: 2, name: '그린팜', price: '5만원', qty: '40주', total: '200만원' },
    { id: 3, name: 'LOL전자', price: '4만원', qty: '50주', total: '200만원' },
];
export default function Page() {

  return (
    <main>
      <h1>주식 종목</h1>
      {stocks.map((stock) => (
        <StockCard key={stock.id} stock={stock} />
      ))}
      <NavButton to="/game/round1/step1" label="다음 페이지" className="button" />
    </main>
  );
}