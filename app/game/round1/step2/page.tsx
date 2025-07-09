import NavButton from '@/components/NavButton';
import StockCard from '@/components/StockCard';

const stocks = [
  { id: 1, name: '나무바이오', price: '10만원', qty: '20주', total: '200만원' },
  { id: 2, name: '그린팜', price: '5만원', qty: '40주', total: '200만원' },
  { id: 3, name: 'LOL전자', price: '4만원', qty: '50주', total: '200만원' },
  { id: 4, name: '나무자동차', price: '20만원', qty: '10주', total: '200만원' },
  { id: 5, name: '그린에너지', price: '25만원', qty: '8주', total: '200만원' },
];

export default function Round1Page() {
  return (
    <main>
      <h1>주식 종목 소개</h1>
      <div className="p-6 bg-green-100 min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {stocks.map(stock => (
              <StockCard key={stock.id} stock={stock} />
            ))}
        </div>
      </div>
    </main>
  );
}