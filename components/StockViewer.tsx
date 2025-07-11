'use client';
import { useState } from 'react';

type Stock = {
  nameImg: string;
  desc: string;
  price: string;
  icon: string;
};

export default function StockViewer({ stocks }: { stocks: Stock[] }) {
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
          width: '900px',
          gap: '3rem'
        }}
      >
        {/* 왼쪽: 아이콘 */}
        <img
          src={stock.icon}
          alt="stock icon"
          style={{ width: '300px', height: '600px', objectFit: 'contain' }}
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
            <p style={{ fontSize: '1.45rem' }}>{stock.desc}</p>
          </div>

          {/* 가격 - 상승/하락 하이라이팅 */}
        <p
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '0.6rem 0',
            width: '100%',
            backgroundColor: stock.price.includes('▲')
              ? 'rgba(255,0,0,0.1)'
              : stock.price.includes('▼')
              ? 'rgba(0,0,255,0.1)'
              : 'rgba(0,0,0,0.05)',
            color: stock.price.includes('▲')
              ? 'red'
              : stock.price.includes('▼')
              ? 'blue'
              : 'black',
            transition: 'all 0.3s ease',
            lineHeight: '1.6'
          }}
        >
          {stock.price.split('  ')[0]}
          <br />
          {stock.price.split('  ')[1]}
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
