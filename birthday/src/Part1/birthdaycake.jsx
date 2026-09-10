import React, { useState, useEffect } from 'react';

const BirthdayCake = ({ onComplete }) => {
  const [countdown, setCountdown] = useState(22);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      if (onComplete) onComplete();
    }
  }, [countdown, onComplete]);

  if (!isVisible) return null;

  const confettiColors = ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8', '#bfdbfe'];

  return (
    <div style={styles.overlay}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Poppins:wght@600;800&display=swap');
          
          @keyframes fall {
            0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
          }
          
          @keyframes pulseRing {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5); }
            70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(59, 130, 246, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          }
        `}
      </style>

      <div style={styles.confettiContainer}>
        {Array.from({ length: 50 }).map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = 3 + Math.random() * 4;
          const size = 6 + Math.random() * 8;
          const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
          const isCircle = Math.random() > 0.5;
          
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '-10vh',
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                borderRadius: isCircle ? '50%' : '2px',
                animation: `fall ${duration}s linear ${delay}s infinite`,
                opacity: 0.8
              }}
            />
          );
        })}
      </div>

      <div style={styles.contentContainer}>
        <div style={styles.imageContainer}>
          <img 
            src="bluecake2.png" 
            alt="Birthday Cake" 
            style={styles.image}
          />
        </div>
        <h2 style={styles.text}>This moment is yours. Pause, breathe, and make a wish. When you're ready, your surprise will be waiting.</h2>
        <div style={styles.countdownContainer}>
          <div style={styles.countdown}>{countdown}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    overflow: 'hidden'
  },
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    zIndex: 2,
    position: 'relative',
    maxWidth: '600px'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '280px',
    height: '280px',
    marginBottom: '20px',
    filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.5))'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  text: {
    color: '#ffffff',
    marginBottom: '30px',
    fontSize: '1.25rem',
    marginTop: '0',
    fontWeight: '400',
    lineHeight: '1.6',
    letterSpacing: '0.5px',
    fontFamily: "'Playfair Display', Georgia, serif",
    fontStyle: 'italic',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  },
  countdownContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    border: '3px solid rgba(96, 165, 250, 0.6)',
    borderRadius: '50%',
    width: '110px',
    height: '110px',
    animation: 'pulseRing 2s infinite',
    backdropFilter: 'blur(4px)'
  },
  countdown: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#ffffff',
    fontFamily: "'Poppins', system-ui, -apple-system, sans-serif",
    lineHeight: '1',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  }
};

export default BirthdayCake;