'use client';
import { useState } from 'react';

type Stock = {
  nameImg: string;
  desc: string;
  price: string;
  icon: string;
};

export default function StockSlider({ stocks }: { stocks: Stock[] }) {
  const [idx, setIdx] = useState(0);
  const stock = stocks[idx];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* 카드 박스 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          width: '700px',
          gap: '3rem'
        }}
      >
        {/* 왼쪽: 아이콘 */}
        <img
          src={stock.icon}
          alt="stock icon"
          style={{ width: '260px', height: '600px', objectFit: 'contain' }}
        />

        {/* 오른쪽: 텍스트 정보 */}
        <div style={{ flex: 1 }}>
          {/* 이름 이미지 */}
          <img
            src={stock.nameImg}
            alt="stock name"
            style={{ width: '800px', marginBottom: '1rem', justifyContent: 'center' }}
          />

          {/* 설명 텍스트 */}
          <div
            style={{
              border: '2px solid black',
              borderRadius: '16px',
              padding: '0.8rem',
              fontWeight: 'bold',
              lineHeight: '1.4',
              backgroundColor: 'white',
              marginBottom: '1rem'
            }}
          >
            <p style={{fontSize: '1.45rem'}}>{stock.desc}</p>
          </div>

          {/* 가격 */}
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'green' }}>
            현재가 : {stock.price}
          </p>
        </div>
      </div>

      {/* 버튼 */}
      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={() => setIdx((idx - 1 + stocks.length) % stocks.length)}
          className="button"
          style={{ marginRight: '1rem' }}
        >
          ◀ 이전
        </button>
        <button
          onClick={() => setIdx((idx + 1) % stocks.length)}
          className="button"
        >
          다음 ▶
        </button>
      </div>
    </div>
  );
}
