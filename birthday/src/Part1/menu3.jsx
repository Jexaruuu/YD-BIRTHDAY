import React, { useState } from 'react';

const Menu3 = () => {
  const [unlockedItems, setUnlockedItems] = useState({});

  const items = [
    "You are never alone.", "You are so strong.", "You are deeply loved.", "You are allowed to rest.",
    "You are doing your best.", "You are heard.", "You are important.", "You are enough."
  ];

  const handleUnlock = (index) => {
    setUnlockedItems(prev => ({ ...prev, [index]: true }));
  };

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
      overflow: 'hidden',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      <svg style={{
        position: 'absolute',
        bottom: '-5%',
        left: '-10%',
        width: '55vw',
        height: '55vw',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.18
      }} viewBox="0 0 500 500">
        <g stroke="#efefd0" strokeWidth="1.2" fill="none">
          <line x1="250" y1="250" x2="490" y2="80" />
          <line x1="250" y1="250" x2="480" y2="220" />
          <line x1="250" y1="250" x2="430" y2="380" />
          <line x1="250" y1="250" x2="280" y2="490" />
          <line x1="250" y1="250" x2="110" y2="440" />
          <line x1="250" y1="250" x2="20" y2="300" />
          <line x1="250" y1="250" x2="130" y2="60" />
          <line x1="250" y1="250" x2="330" y2="20" />

          <path d="M 490,80 Q 380,120 480,220 Q 360,200 430,380 Q 320,330 280,490 Q 240,360 110,440 Q 160,320 20,300 Q 140,230 130,60 Q 220,130 330,20 Q 270,140 490,80" />
          <path d="M 440,115 Q 360,145 425,205 Q 340,195 395,335 Q 305,295 275,435 Q 235,335 135,395 Q 175,305 70,285 Q 145,225 155,95 Q 225,145 310,55 Q 265,135 440,115" />
          <path d="M 390,150 Q 330,175 370,200 Q 315,195 360,290 Q 290,265 270,380 Q 240,305 160,350 Q 190,285 120,270 Q 160,215 175,135 Q 225,170 290,95 Q 260,140 390,150" />
          <path d="M 340,180 Q 300,200 325,215 Q 285,210 315,245 Q 275,230 265,325 Q 245,275 185,305 Q 205,260 170,250 Q 190,210 200,175 Q 225,195 270,135 Q 255,160 340,180" />
        </g>
      </svg>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
      `}</style>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.1vw',
        marginTop: '-3vw',
        paddingLeft: '0',
        paddingRight: '0',
        position: 'relative',
        zIndex: 1
      }}>
        <div>All About You</div>
        <div>"You are love as you are."</div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: '0',
        paddingRight: '0',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          fontSize: '5.5vw',
          fontWeight: '900',
          lineHeight: '1.2',
          letterSpacing: '-0.04em',
          marginBottom: '2vw'
        }}>
          Who you are?
          <br />
          (and love about you)
        </div>

        <div style={{
          fontSize: '1.1vw',
          lineHeight: '1.6',
          maxWidth: '42vw',
          fontWeight: '400',
          marginBottom: '6vw'
        }}>
          Paulit ulit kong sasabihin sa'yo na mahalaga ka palagi. Kapag malungkot ka o kahit na masaya, basahin mo lang tong mga to kasi lahat ng nandito ay totoo. Isa rin sa dahilan kaya ginagawa ko tong mga gantong bagay ay ayokong malaman or maramdaman na malungkot ka dahil nag-aalala din ako sayo. Palagi kang gugustuhin kung sino ka man. Just click/tap the blurred words...
        
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vw',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: '1.3vw',
            fontWeight: '700'
          }}>
            {items.slice(0, 4).map((item, index) => (
              <span 
                key={index} 
                onClick={() => handleUnlock(index)}
                style={{
                  cursor: 'pointer',
                  filter: unlockedItems[index] ? 'none' : 'blur(8px)',
                  userSelect: 'none',
                  transition: 'filter 0.3s ease'
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: '1.3vw',
            fontWeight: '700',
            paddingLeft: '6vw',
            paddingRight: '6vw'
          }}>
            {items.slice(4, 8).map((item, index) => {
              const actualIndex = index + 4;
              return (
                <span 
                  key={actualIndex} 
                  onClick={() => handleUnlock(actualIndex)}
                  style={{
                    cursor: 'pointer',
                    filter: unlockedItems[actualIndex] ? 'none' : 'blur(8px)',
                    userSelect: 'none',
                    transition: 'filter 0.3s ease'
                  }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ height: '2vw', position: 'relative', zIndex: 1 }}></div>
    </div>
  );
};

export default Menu3;