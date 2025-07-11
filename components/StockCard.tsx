// components/StockCard.tsx
'use client';

import React from 'react';
import './StockCard.css';

type Stock = {
  id: number;
  name: string;
  price: string;
  qty: string;
  total: string;
};

export default function StockCard({ stock }: { stock: Stock }) {
  return (
    <div className="stock-card">
      <div className="stock-badge">{stock.id}</div>
      <div className="stock-info">
        <div className="stock-name">{stock.name}</div>
        <div className="stock-detail">{stock.price} × {stock.qty}</div>
        <div className="stock-total">= {stock.total}</div>
      </div>
    </div>
  );
}