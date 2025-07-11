'use client';

import { useState } from 'react';
import NavButton from '@/components/NavButton';

type Question = {
  emoji: string;
  answer: string;
};

const questions: Question[] = [
  { emoji: '🍕 + 🍔', answer: '패스트푸드' },
  { emoji: '🐶 + 🏠', answer: '개집' },
  { emoji: '🌧️ + ☂️', answer: '우산' },
  { emoji: '🍎 + 📱', answer: '애플' },
  { emoji: '🎓 + 🏫', answer: '졸업식' },
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheckAnswer = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % questions.length);
    setShowAnswer(false);
  };

  const currentQuestion = questions[current];

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }} className="inner-content">
      <h2>이모지 퀴즈</h2>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        {currentQuestion.emoji}
      </div>

      {showAnswer && (
        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          정답: <strong>{currentQuestion.answer}</strong>
        </div>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={handleCheckAnswer}>정답 확인</button>
        <button onClick={handleNext} style={{ marginLeft: '1rem' }}>
          다음 문제
        </button>
      </div>

      <NavButton to="/round2/news" label="홈으로 돌아가기" className="button" />
    </main>
  );
}
