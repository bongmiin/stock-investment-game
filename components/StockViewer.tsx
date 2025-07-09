'use client';
import { useState } from 'react';

type Stock = {
  id: number;
  name: string;
  desc: string;
  price: string;
  icon: string;
};

export default function StockSlider({ stocks }: { stocks: Stock[] }) {
  const [idx, setIdx] = useState(0);
  const stock = stocks[idx];

  return (
    <div>
      <div>
        <div>{stock.id}</div>
        <img src={stock.icon} alt="icon" />
        <h2>{stock.name}</h2>
        <p>{stock.desc}</p>
        <p>{stock.price}</p>
      </div>

      <div>
        <button onClick={() => setIdx((idx - 1 + stocks.length) % stocks.length)} className='button'>이전</button>
        <button onClick={() => setIdx((idx + 1) % stocks.length)} className='button'>다음</button>
      </div>
    </div>
  );
}
