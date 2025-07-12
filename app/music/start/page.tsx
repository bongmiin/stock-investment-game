'use client';

import { useState } from 'react';
import NavButton from '@/components/NavButton';

type Question = {
  audio: string;
  answer: string;
};

const questions: Question[] = [
  { audio: '/songs/song1.mp3', answer: 'ALLDAY PROJECT - FAMOUS' },
  { audio: '/songs/song2.mp3', answer: '헤이즈(Heize) - 마지막 너의 인사 (The Last)' },
  { audio: '/songs/song3.mp3', answer: '릴러말즈 (Leellamarz), TOIL - 후유증 (Feat. 개리)' },
  { audio: '/songs/song4.mp3', answer: '고경표 - ...사랑했잖아...(2024)' },
  { audio: '/songs/song5.mp3', answer: 'Adam Levine - Lost Stars' },
  { audio: '/songs/song6.mp3', answer: 'Kendrick Lamar - Not Like Us' },
  { audio: '/songs/song7.mp3', answer: 'Lee Hyori (이효리) - 10 Minutes' },
  { audio: '/songs/song8.mp3', answer: 'BIBI(비비) - Maybe if(우리가 헤어져야 했던 이유)' },
  { audio: '/songs/song9.mp3', answer: "CNBLUE(씨엔블루) - Can't Stop" },
  { audio: '/songs/song10.mp3', answer: '비투비(BTOB) - 그리워하다' },
];

export default function MusicQuizPage() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
  };

  const currentQuestion = questions[current];
  const isLast = current >= questions.length - 1;

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }} className="inner-content">
      <h1>🎵 노래 맞추기 퀴즈</h1>

        <audio
        controls
        key={currentQuestion.audio}
        style={{
            display: 'block',
            margin: '0 auto 1.5rem',
        }}
        >
        <source src={currentQuestion.audio} type="audio/mp3" />
        브라우저가 오디오를 지원하지 않습니다.
        </audio>


      {showAnswer && (
        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          정답: <strong>{currentQuestion.answer}</strong>
        </div>
      )}

      <div style={{ marginBottom: '2rem' }}>
        <button onClick={handleCheckAnswer} className="team-button" style={{ marginRight: '1rem' }}>
          정답 확인
        </button>

        {!isLast ? (
          <button onClick={handleNext} className="team-button">
            다음 노래
          </button>
        ) : (
          <NavButton to="/round3/step3" label="3라운드 개장" className="button" />
        )}
      </div>
    </main>
  );
}
