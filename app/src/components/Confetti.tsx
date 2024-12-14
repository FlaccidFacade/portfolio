import React, { useRef, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  children: React.ReactNode;
}

const Confetti: React.FC<ConfettiProps> = ({ children }) => {
  const confettiRef = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState(0);
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsReady(true);
    }
  }, [timer]);

  const handleMouseEnter = () => {
    if (confettiRef.current && isReady) {
      const rect = confettiRef.current.getBoundingClientRect();
      confetti({
        particleCount: 50,
        spread: 40,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
      setIsReady(false);
      setTimer(10); // 10 seconds cooldown
    }
  };

  return (
    <div
      ref={confettiRef}
      onMouseEnter={handleMouseEnter}
      style={{ position: 'relative' }}
    >
      <div
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '100%',
          height: '100%',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
        {!isReady ? (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '25%',
              right: '25%',
              height: '10px',
              backgroundColor: '#ccc',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div
              style={{
                width: `${(10 - timer) * 10}%`,
                height: '100%',
                backgroundColor: '#4caf50',
                borderRadius: '5px',
              }}
            />
          </div>
        ) : (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#4caf50',
              color: '#fff',
              padding: '2px 5px',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              animation: 'fadeOut 3s forwards',
            }}
          >
            🎉Ready to Fire🎉
          </div>
        )}
        <style jsx>{`
          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Confetti;
