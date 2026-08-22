import React from 'react';

const Menu6 = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      overflowX: 'hidden',
      justifyContent: 'space-between',
      transition: 'opacity 0.5s ease-in-out'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
        
        @media (max-width: 768px) {
          .menu6-container {
            padding: 6vw !important;
            gap: 3rem !important;
          }
          .menu6-top-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
            font-size: 3.5vw !important;
            margin-top: 0 !important;
          }
          .menu6-main-content {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8vw !important;
          }
          .menu6-heading {
            font-size: 16vw !important;
            line-height: 1 !important;
          }
          .menu6-arrow {
            font-size: 14vw !important;
            align-self: flex-start !important;
          }
        }
      `}</style>
      
      <div className="menu6-container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 'calc(100vh - 8vw)',
        boxSizing: 'border-box'
      }}>
        <div className="menu6-top-bar" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.1vw',
          marginTop: '-3vw',
          paddingLeft: '0',
          paddingRight: '0'
        }}>
          <div>jrgn.yd.lmdl</div>
          <div>"Happy birthday to my favorite person."</div>
        </div>

        <div className="menu6-main-content" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexGrow: 1,
          paddingLeft: '0',
          paddingRight: '0'
        }}>
          <div className="menu6-heading" style={{
            fontSize: '11vw',
            fontWeight: '900',
            lineHeight: '0.9',
            letterSpacing: '-0.04em',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
          }}>
            <span>From the to</span>
            <span style={{ display: 'inline-flex', flexDirection: 'column', position: 'relative' }}>
              <span>p.</span>
              <img 
                src="spidey.png" 
                alt="Top decoration" 
                style={{
                  width: '8vw',
                  height: 'auto',
                  marginTop: '1.8vw',
                  marginLeft: '-2vw',
                  objectFit: 'cover'
                }}
              />
            </span>
          </div>

          <div 
            className="menu6-arrow"
            onClick={handleScrollToTop}
            style={{
              fontSize: '7vw',
              fontWeight: '400',
              lineHeight: '1',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
          >
            →
          </div>
        </div>

        <div style={{ height: '2vw' }}></div>
      </div>
    </div>
  );
};

export default Menu6;