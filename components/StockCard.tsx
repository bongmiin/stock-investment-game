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
    <div className="relative bg-white border-2 border-green-500 rounded-xl p-4 w-48 shadow-md">
      <div className="absolute -top-4 -left-4 bg-green-600 text-white w-8 h-8 flex items-center justify-center font-bold rounded-full shadow">
        {id}
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm">{price} × {qty}</p>
        <p className="text-md font-semibold text-green-700 mt-1">= {total}</p>
      </div>
    </div>
  );
}
