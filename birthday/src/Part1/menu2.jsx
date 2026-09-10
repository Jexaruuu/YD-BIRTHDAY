import React, { useState, useEffect } from 'react';

const Menu2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setNextImageIndex(nextIndex);
      setTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(nextIndex);
        setNextImageIndex(null);
        setTransitioning(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
        
        @media (max-width: 768px) {
          .menu2-container {
            padding: 6vw !important;
            gap: 3rem !important;
          }
          .menu2-top-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
            font-size: 3.5vw !important;
            margin-top: 0 !important;
          }
          .menu2-content-area {
            flex-direction: column !important;
            align-items: center !important;
            gap: 6vw !important;
          }
          .menu2-image-wrapper {
            width: 75vw !important;
            height: 75vw !important;
          }
          .menu2-text-wrapper {
            max-width: 100% !important;
            text-align: justify !important;
          }
          .menu2-heading {
            font-size: 11vw !important;
            margin-bottom: 3vw !important;
            text-align: left !important;
          }
          .menu2-body-text {
            font-size: 3.8vw !important;
            margin-bottom: 3vw !important;
            text-align: justify !important;
          }
        }
      `}</style>
      
      <div className="menu2-container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 8vw)',
        boxSizing: 'border-box'
      }}>
        <div className="menu2-top-bar" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.1vw',
          marginTop: '2vw',
          paddingLeft: '0',
          paddingRight: '0'
        }}>
          <div>Birthday Greetings</div>
          <div>"Always here for you."</div>
        </div>

        <div className="menu2-content-area" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '4vw',
          width: '100%',
          paddingLeft: '0',
          paddingRight: '0'
        }}>
          <div className="menu2-image-wrapper" style={{
            width: '32vw',
            height: '32vw',
            borderRadius: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            flexShrink: 0
          }}>
            <img 
              src={images[currentImageIndex]} 
              alt="Custom" 
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: transitioning ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
              }} 
            />
            {nextImageIndex !== null && (
              <img 
                src={images[nextImageIndex]} 
                alt="Custom Next" 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: transitioning ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out'
                }} 
              />
            )}
          </div>

          <div 
            className="menu2-text-wrapper" 
            onClick={() => isBlurred && setIsBlurred(false)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              maxWidth: '54vw',
              position: 'relative',
              cursor: isBlurred ? 'pointer' : 'default'
            }}
          >
            <div style={{
              filter: isBlurred ? 'blur(6px)' : 'none',
              userSelect: isBlurred ? 'none' : 'auto',
              transition: 'filter 0.4s ease-in-out'
            }}>
              <div className="menu2-heading" style={{
                fontSize: '5.5vw',
                fontWeight: '900',
                lineHeight: '0.95',
                letterSpacing: '-0.04em',
                marginBottom: '1.5vw'
              }}>
                Hello,
                Aila.
              </div>

              <div className="menu2-body-text" style={{
                fontSize: '1.1vw',
                lineHeight: '1.6',
                marginBottom: '1.5vw',
                fontWeight: '400',
                textAlign: 'justify'
              }}>
                Hi Aila Medel, Alam ko na na-kwento mo sakin na ayaw mo sa name mo pero gusto parin kitang batiin sa name mo na yan kasi bilang Aila ikaw yung may birthday. (sobrang gulo din no? sorry hehe). And ewan ang cute nung name mo promise :)
              </div>

              <div className="menu2-body-text" style={{
                fontSize: '1.05vw',
                lineHeight: '1.6',
                fontWeight: '400',
                opacity: '0.9',
                textAlign: 'justify'
              }}>
               I just wanna greet you a happy birthday Aila Medel, Jergen, Yoda, Adoy. I hope na you have a great day and a great year ahead. Sana maging masaya ka sa birthday mo at sana maging masaya ka today and pati na rin sa mga susunod na mga days, weeks, months, and years. Isa ka sa mga taong pinaka mahalaga sakin, I mean "Ikaw". Alam ko na nasabi ko na din to dati sayo na I'm very happy na nakilala kita and yes hindi man tayo nagkikita sa personal but I wanna say na it's weird kasi sa taong malayo pa sakin ko pa mararamdaman yung comfort kahit sa mga simpleng bagay tulad ng nakakasama kita sa laro and kapag nakakausap ka lang kahit saglit. I hope na we meet again kasi to be honest merong isang maliit na bagay na hanggang ngayon inoovethink ko parin na sana ginawa ko nung day na una kitang nakita in person that's why gusto ko bumawi. Aila, I hope na sana napapasaya kita kahit konti sa mga bagay na pinapakita ko and binibigay ko kasi alam ko na sobrang deserve mo yung mga bagay na yun and sobrang deserve mo na mahalin ng tunay. Basta Aila, nandito lang me always. I'm always rooting for you. I'm always waiting and yes I'll be the one who stays until the end promise yan legit, ayan may legit na yan hahaha. Again Aila, have a wonderful day sa iyong birthday wag ka mag papa-stress tulad ng lagi kong sinasabi, uminom na madaming tubig kahit alam ko 2L water per day ikaw, and always ikaw and si aqui mag iingat okay? pa hi na din kay tita kung pwede? dejoke hahaha. I know na you don't like surprises but my love language always kick in lalo na sa mga araw na ganto lalo na kapag gusto ko. Alam ko din kasi na if hindi ko ginawa yung isang bagay na gusto ko, pagsisisihan ko din eh. Happy birthday again my favorite person, Aila Medel.
              </div>
            </div>

            {isBlurred && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(7, 42, 200, 0.2)',
                borderRadius: '1rem',
                zIndex: 2,
                backdropFilter: 'blur(2px)'
              }}>
                <div style={{
                  backgroundColor: '#efefd0',
                  color: '#072ac8',
                  padding: '1vw 2vw',
                  borderRadius: '2rem',
                  fontWeight: '700',
                  fontSize: '1.1vw',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  letterSpacing: '0.02em',
                  textAlign: 'center'
                }}>
                  Tap to view message
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ height: '2vw' }}></div>
      </div>
    </div>
  );
};

export default Menu2;