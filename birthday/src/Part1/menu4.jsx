import React, { useState, useRef, useEffect } from 'react';

const Menu4 = () => {
  const experiences = [
    { period: "", role: "Joy & Happiness", company: "Sana lahat ng gusto mo sa life is mangyari, lalo na yung mga bagay na kasama mo si baby Aqui.", audio: "wish1.mp3" },
    { period: "", role: "Good Health & Energy", company: "Sana palagi ikaw na healthy and ganon din sa family mo.", audio: "wish2.mp3" },
    { period: "", role: "Success & Abundance", company: "Sana patuloy kang blessed sa career mo at personal endeavors mo, unli success para sayo!", audio: "wish3.mp3" },
    { period: "", role: "Peace of Mind", company: "Sana less stress at more chill moments lang sa araw-araw, you deserve all the inner peace.", audio: "wish4.mp3" },
    { period: "", role: "Endless Love & Smiles", company: "Sana lagi kang masaya, surrounded by people who love and cherish you truly every single day.", audio: "wish5.mp3" }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const audioRefs = useRef([]);

  const togglePlay = (index) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    if (activeIndex === index) {
      if (currentAudio.paused) {
        currentAudio.play();
      } else {
        currentAudio.pause();
        setActiveIndex(null);
      }
    } else {
      audioRefs.current.forEach((aud, i) => {
        if (aud) {
          aud.pause();
          aud.currentTime = 0;
        }
      });
      currentAudio.play();
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const currentAudioRefs = audioRefs.current;
    return () => {
      currentAudioRefs.forEach((aud) => {
        if (aud) {
          aud.pause();
        }
      });
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#072ac8',
      color: '#efefd0',
      fontFamily: '"Poppins", sans-serif',
      padding: '4vw',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      justifyContent: 'space-between'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');
        
        .wish-item {
          transition: all 0.25s ease;
        }
        .wish-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          padding-left: 1vw;
          padding-right: 1vw;
          border-radius: 8px;
        }

        @keyframes pulse-text {
          0%, 100% { opacity: 0.6; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(-4px); }
        }

        .press-label {
          animation: pulse-text 1.5s infinite ease-in-out;
        }

        @media (max-width: 768px) {
          .menu4-container {
            padding: 6vw !important;
            gap: 3rem !important;
          }
          .menu4-top-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
            font-size: 3.5vw !important;
            margin-top: 0 !important;
          }
          .menu4-main-content {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 6vw !important;
          }
          .menu4-heading {
            font-size: 11vw !important;
            max-width: 100% !important;
          }
          .menu4-list-wrapper {
            max-width: 100% !important;
            gap: 4vw !important;
          }
          .menu4-item-period {
            font-size: 3.2vw !important;
          }
          .menu4-item-role {
            font-size: 4vw !important;
          }
          .menu4-item-company {
            font-size: 3.5vw !important;
          }
        }
      `}</style>
      
      <div className="menu4-container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 8vw)',
        boxSizing: 'border-box'
      }}>
        <div className="menu4-top-bar" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.1vw',
          marginTop: '-3vw',
          paddingLeft: '0',
          paddingRight: '0'
        }}>
        
        </div>

        <div className="menu4-main-content" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          paddingLeft: '0',
          paddingRight: '0'
        }}>
          <div className="menu4-heading" style={{
            fontSize: '5.5vw',
            fontWeight: '900',
            lineHeight: '1.1',
            letterSpacing: '-0.04em',
            maxWidth: '40vw'
          }}>
            The
            <br />
            Special 
            <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', verticalAlign: 'top' }}>
              <span>Wishes.</span>
              <img 
                src="sandg.png" 
                alt="Decoration" 
                style={{
                  width: '19vw',
                  height: 'auto',
                  marginTop: '-1.6vw',
                  marginLeft: '7.7vw',
                  objectFit: 'cover'
                }}
              />
            </span>
            
          </div>

          <div className="menu4-list-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2vw',
            maxWidth: '45vw',
            width: '100%'
          }}>
            {experiences.map((item, index) => {
              const isPlaying = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className="wish-item"
                  onClick={() => togglePlay(index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(239, 239, 208, 0.15)',
                    paddingBottom: '1.2vw',
                    paddingTop: '0.5vw',
                    cursor: 'pointer'
                  }}
                >
                  <audio 
                    ref={(el) => (audioRefs.current[index] = el)} 
                    src={item.audio} 
                    onEnded={() => setActiveIndex(null)}
                  />

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1vw',
                    marginRight: '2vw',
                    flexShrink: 0
                  }}>
                    {!isPlaying && (
                      <span className="press-label" style={{
                        color: '#efefd0',
                        fontSize: '0.8vw',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        whiteSpace: 'nowrap',
                        opacity: '0.85'
                      }}>
                        press to play →
                      </span>
                    )}

                    <div style={{
                      width: '3.2vw',
                      height: '3.2vw',
                      minWidth: '38px',
                      minHeight: '38px',
                      borderRadius: '50%',
                      backgroundColor: isPlaying ? '#efefd0' : 'rgba(239, 239, 208, 0.15)',
                      color: isPlaying ? '#072ac8' : '#efefd0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isPlaying ? '0 0 15px rgba(239, 239, 208, 0.4)' : 'none',
                      transition: 'all 0.2s ease'
                    }}>
                      {isPlaying ? (
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '14px' }}>
                          <span style={{ width: '3px', backgroundColor: '#072ac8', animation: 'bounce 0.6s infinite alternate', height: '100%' }}></span>
                          <span style={{ width: '3px', backgroundColor: '#072ac8', animation: 'bounce 0.4s infinite alternate', height: '60%' }}></span>
                          <span style={{ width: '3px', backgroundColor: '#072ac8', animation: 'bounce 0.8s infinite alternate', height: '80%' }}></span>
                        </div>
                      ) : (
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" style={{ marginLeft: '2px' }}>
                          <path d="M11 6.13397C11.6667 6.51887 11.6667 7.48113 11 7.86603L2 13.0622C1.33333 13.4471 0.5 12.966 0.5 12.1962L0.5 1.80385C0.5 1.03405 1.33333 0.552923 2 0.937822L11 6.13397Z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', width: '100%' }}>
                    <span className="menu4-item-role" style={{ 
                      fontSize: '1.2vw', 
                      fontWeight: '700',
                      color: isPlaying ? '#ffffff' : '#efefd0',
                      transition: 'color 0.2s ease'
                    }}>
                      {item.role}
                    </span>
                    <span className="menu4-item-company" style={{ fontSize: '1.05vw', fontWeight: '400', opacity: '0.7' }}>
                      {item.company}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ height: '2vw' }}></div>
      </div>
    </div>
  );
};

export default Menu4;