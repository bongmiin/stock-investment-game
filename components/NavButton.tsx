'use client';

import { useRouter } from 'next/navigation';

type NavButtonProps = {
  to: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export default function NavButton({ to, label, className, onClick }: NavButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        onClick?.();           
        router.push(to);       
      }}
      className={`button ${className ?? ''}`}
    >
      {label}
    </button>
  );
}
