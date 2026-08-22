import React from 'react';

const Menu5 = () => {
  const items = [
    { number: "1", title: "https://to-jergen-hbd.vercel.app/" },
    { number: "2", title: "https://specialsurpriseforyoda.vercel.app/" },
    { number: "3", title: "https://adoy-valentine.vercel.app/" },
    { number: "4", title: "https://randomthingforyoda.vercel.app/" }
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
        
        .menu5-link {
          color: #efefd0;
          text-decoration: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .menu5-link:hover {
          opacity: 0.6;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .menu5-container {
            padding: 6vw !important;
            gap: 3rem !important;
          }
          .menu5-top-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
            font-size: 3.5vw !important;
            margin-top: 0 !important;
          }
          .menu5-main-content {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 6vw !important;
          }
          .menu5-heading {
            font-size: 11vw !important;
            max-width: 100% !important;
          }
          .menu5-list-wrapper {
            max-width: 100% !important;
            gap: 4vw !important;
          }
          .menu5-item-text {
            font-size: 4vw !important;
          }
        }
      `}</style>
      
      <div className="menu5-container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 8vw)',
        boxSizing: 'border-box'
      }}>
        <div className="menu5-top-bar" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.1vw',
          marginTop: '-3vw',
          paddingLeft: '0',
          paddingRight: '0'
        }}>
          <div>"I will never get bored making this thing for you."</div>
        </div>

        <div className="menu5-main-content" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          paddingLeft: '0',
          paddingRight: '0'
        }}>
          <div className="menu5-heading" style={{
            fontSize: '5.5vw',
            fontWeight: '900',
            lineHeight: '1.1',
            letterSpacing: '-0.04em',
            maxWidth: '40vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <span>My previous</span>
            <br />
            <span>gifts for you.</span>
            <img 
              src="spdrmn.png" 
              alt="Gift Preview" 
              style={{
                width: '15vw',
                height: 'auto',
                objectFit: 'cover',
                marginTop: '4vw',
                marginLeft: '80vw'
              }}
            />
          </div>

          <div className="menu5-list-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5vw',
            maxWidth: '45vw',
            width: '100%'
          }}>
            {items.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.8vw'
                }}>
                  <span className="menu5-item-text" style={{ fontSize: '1.5vw', fontWeight: '700' }}>
                    {item.number}
                  </span>
                  <a 
                    href={item.title} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="menu5-link menu5-item-text" 
                    style={{ fontSize: '1.5vw', fontWeight: '700' }}
                  >
                    {item.title}
                  </a>
                </div>
                <div style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#efefd0',
                  opacity: '1'
                }}></div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: '2vw' }}></div>
      </div>
    </div>
  );
};

export default Menu5;