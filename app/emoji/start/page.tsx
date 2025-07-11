'use client';

import { useState } from 'react';
import NavButton from '@/components/NavButton';

type Question = {
  emoji: string;
  answer: string;
};

const questions: Question[] = [
  { emoji: '🟥🧠🔫💸🧍‍♂️🎮', answer: '오징어 게임' },
  { emoji: '⚰️👻🔍🔮😱', answer: '파묘' },
  { emoji: '👑😢💍🏙❤️', answer: '눈물의 여왕' },
  { emoji: '🎭🔥🧑‍🏫📺😱🩸', answer: '더 글로리' },
  { emoji: '📈🎓👩‍👩‍👧‍👧📚😤🏫', answer: '스카이캐슬' },
  { emoji: '🧟‍♂️🚂👩‍👧🪟💥🚪', answer: '부산행' },
  { emoji: '👩‍💼👗📱💄🔪🩸', answer: '마스크걸' },
  { emoji: '👨‍👩‍👦🧹🏠🍽️🌧️🪜', answer: '기생충' },
  { emoji: '🪂💨🪖🚧❤️', answer: '사랑의 불시착' },
  { emoji: '🎻📚🎓🕰️💔🚶‍♂️', answer: '선재 업고 튀어' }
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
      <h1>이모지 퀴즈</h1>
      <div style={{ fontSize: '6.5rem', marginBottom: '2rem' }}>
        {currentQuestion.emoji}
      </div>

      {showAnswer && (
        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          정답: <strong>{currentQuestion.answer}</strong>
        </div>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={handleCheckAnswer} className='team-button'>정답 확인</button>
        {questions.length > current + 1 && (
          <button onClick={handleNext} style={{ marginLeft: '1rem' }} className='team-button'>
            다음 문제
            </button>
)}

      </div>

      <NavButton to="/round2/news" label="2라운드 개장" className="button" />
    </main>
  );
}
