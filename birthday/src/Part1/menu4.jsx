import React from 'react';

const Menu4 = () => {
  const experiences = [
    { period: "", role: "Joy & Happiness", company: "Sana lahat ng gusto mo sa life is mangyari, lalo na yung mga bagay na kasama mo si baby Aqui." },
    { period: "", role: "Good Health & Energy", company: "Sana palagi ikaw na healthy and ganon din sa family mo." },
    { period: "", role: "Success & Abundance", company: "Sana patuloy kang blessed sa career at personal endeavors mo, unli success para sayo!" },
    { period: "", role: "Peace of Mind", company: "Sana less stress at more chill moments lang sa araw-araw, you deserve all the inner peace." },
    { period: "", role: "Endless Love & Smiles", company: "Sana lagi kang masaya, surrounded by people who love and cherish you truly every single day." }
  ];

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
            {experiences.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                borderBottom: '1px solid rgba(239, 239, 208, 0.15)',
                paddingBottom: '1.2vw'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', width: '100%' }}>
                  <span className="menu4-item-role" style={{ fontSize: '1.2vw', fontWeight: '700' }}>
                    {item.role}
                  </span>
                  <span className="menu4-item-company" style={{ fontSize: '1.05vw', fontWeight: '400', opacity: '0.7' }}>
                    {item.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: '2vw' }}></div>
      </div>
    </div>
  );
};

export default Menu4;