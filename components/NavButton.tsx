'use client';

import { useRouter } from 'next/navigation';

type NavButtonProps = {
  to: string;         // 이동할 경로
  label: string;      // 버튼에 표시할 텍스트
  className?: string; // (선택) 추가 스타일
};

export default function NavButton({ to, label, className }: NavButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to)}
      className={`button ${className ?? ''}`}  // Tailwind 클래스 'button' 사용
    >
      {label}
    </button>
  );
}
