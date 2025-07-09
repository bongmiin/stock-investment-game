'use client';

type Stock = {
  id: number;
  name: string;
  price: string;
  qty: string;
  total: string;
};

export default function StockCard({ stock }: { stock: Stock }) {
  const { id, name, price, qty, total } = stock;

  return (
    <div>
      <div>
        {id}
      </div>
      <div>
        <h3>{name}</h3>
        <p>{price} × {qty}</p>
        <p>= {total}</p>
      </div>
    </div>
  );
}
