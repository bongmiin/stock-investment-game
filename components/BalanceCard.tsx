'use client';

type BalanceCardProps = {
  teamName: string;
};

export default function BalanceCard({ teamName }: BalanceCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{teamName}</h2>
      <p>예수금: 10,000,000원</p>
      <p>총 평가액: 10,000,000원</p>
      <p>수익률: 0%</p>
      <table>
        <thead>
          <tr>
            <th>종목</th>
            <th>보유 수량</th>
            <th>평가 금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>나무바이오</td>
            <td>0</td>
            <td>0</td>
          </tr>
          {/* 추가 종목 가능 */}
        </tbody>
      </table>
    </div>
  );
}
