import React, { useState, useEffect } from 'react';

const Menu6 = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const carouselImages = [
    'y1.jpg',
    'y2.jpg',
    'meandu.png',
    'meandu1.png',
    'meandu3.png',
    'us1.png',
    'us2.png',
    'us3.png',
    'us4.png',
    'us5.png',
    'us6.png',
    'yoda.png',
    'yoda2.png',
    'yodaandme.png',
    'yoda3.png',
    'adoy7.png',
    'adoy10.png',
    'adoy11.png',
    'adoy12.png',
    'adoy15.png',
    'yoda1.png',  
    'yodaaa.png',
    'yodaaaa.png',
    'yoda4.png',
  ];

  const btsMedia = [
    { type: 'video', src: 'bts.mp4', title: 'Mini Behind The Scene', subtitle: 'Triny ko lang hehe.' },
    { type: 'image', src: 'bts.jpg', title: 'Gwen & Spidey', subtitle: 'Cute nila diba?' },
    { type: 'image', src: 'bts2.jpg', title: 'Baby Yoda', subtitle: 'Yooooodaaaaaa!' },
    { type: 'image', src: 'bts3.jpg', title: 'Hanging Spidey', subtitle: 'Okay lang yan sya, hindi sya mahuhulog, Ako oo. hehe' }
  ];

  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
      justifyContent: 'space-between',
      transition: 'opacity 0.5s ease-in-out'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');

        .menu6-gallery-wrapper {
          width: 100%;
          margin-top: 0;
          margin-bottom: 3vw;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(6vw, 1fr));
          gap: 1.5vw;
          max-height: 28vh;
          overflow-y: auto;
          padding-right: 0.5vw;
          scrollbar-width: thin;
          scrollbar-color: rgba(239, 239, 208, 0.3) transparent;
        }

        .menu6-gallery-wrapper::-webkit-scrollbar {
          width: 6px;
        }

        .menu6-gallery-wrapper::-webkit-scrollbar-thumb {
          background-color: rgba(239, 239, 208, 0.3);
          border-radius: 4px;
        }

        .menu6-gallery-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 1vw;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(20px);
          opacity: 0;
          animation: fadeUpItem 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        @keyframes fadeUpItem {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .menu6-gallery-item:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          z-index: 10;
        }

        .menu6-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .menu6-gallery-item:hover img {
          transform: scale(1.1);
        }

        .menu6-gallery-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .menu6-gallery-item:hover::after {
          opacity: 1;
        }

        /* Sleek Behind the Scenes Section Styling */
        .bts-section-container {
          width: 100%;
          margin-bottom: 3vw;
          display: flex;
          flex-direction: column;
          gap: 1vw;
        }

        .bts-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95vw;
          opacity: 0.85;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(239, 239, 208, 0.15);
          padding-bottom: 0.5vw;
        }

        .bts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2vw;
        }

        .bts-item {
          position: relative;
          height: 8.5vw;
          border-radius: 1vw;
          overflow: hidden;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(239, 239, 208, 0.15);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bts-item:hover {
          transform: translateY(-5px);
          border-color: rgba(239, 239, 208, 0.5);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .bts-item img, .bts-item video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .bts-item:hover img, .bts-item:hover video {
          transform: scale(1.08);
          filter: brightness(0.95);
        }

        .bts-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(7, 42, 200, 0.85) 10%, rgba(0, 0, 0, 0.2) 80%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.8vw 1vw;
        }

        .bts-title {
          font-size: 0.85vw;
          font-weight: 700;
          color: #efefd0;
          margin-bottom: 0.1vw;
        }

        .bts-subtitle {
          font-size: 0.65vw;
          opacity: 0.75;
          letter-spacing: 0.02em;
        }

        .bts-play-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 2.5vw;
          height: 2.5vw;
          background: rgba(7, 42, 200, 0.8);
          border: 1px solid rgba(239, 239, 208, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #efefd0;
          font-size: 1vw;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .bts-item:hover .bts-play-badge {
          transform: translate(-50%, -50%) scale(1.1);
          background: rgba(7, 42, 200, 1);
        }

        .menu6-image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: pointer;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .menu6-image-modal img, .menu6-image-modal video {
          max-width: 85vw;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 1vw;
          cursor: default;
          animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 768px) {
          .menu6-container {
            padding: 6vw !important;
            gap: 2rem !important;
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
            gap: 6vw !important;
          }
          .menu6-heading {
            font-size: 16vw !important;
            line-height: 1 !important;
          }
          .menu6-arrow {
            font-size: 14vw !important;
            align-self: flex-start !important;
          }
          .menu6-gallery-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(14vw, 1fr));
            gap: 2.5vw;
            max-height: 32vh;
          }
          .bts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5vw;
          }
          .bts-item {
            height: 30vw;
          }
          .bts-header {
            font-size: 2.8vw;
          }
          .bts-title {
            font-size: 2.8vw;
          }
          .bts-subtitle {
            font-size: 2.1vw;
          }
          .bts-play-badge {
            width: 8vw;
            height: 8vw;
            font-size: 3.5vw;
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

        <div style={{
          fontSize: '1vw',
          textAlign: 'center',
          marginTop: '1.5vw',
          marginBottom: '1vw',
          opacity: 0.7,
          letterSpacing: '0.05em'
        }}>
          ✨ Good old memories ✨
        </div>

        {/* Gallery Grid */}
        <div className="menu6-gallery-wrapper">
          {carouselImages.map((src, index) => (
            <div
              key={index}
              className="menu6-gallery-item"
              onClick={() => handleMediaClick({ type: 'image', src })}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <img
                src={src}
                alt={`gallery-${index}`}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Behind the Scenes Section (1 MP4 Video & 3 Images) */}
        <div className="bts-section-container">
          <div className="bts-header">
            <span>🎬 Behind The Scenes</span>
            <span style={{ opacity: 0.6, fontSize: '0.85em' }}></span>
          </div>
          <div className="bts-grid">
            {btsMedia.map((item, index) => (
              <div
                key={index}
                className="bts-item"
                onClick={() => handleMediaClick(item)}
              >
                {item.type === 'video' ? (
                  <>
                    <video src={item.src} muted loop playsInline />
                    <div className="bts-play-badge">▶</div>
                  </>
                ) : (
                  <img src={item.src} alt={item.title} draggable={false} />
                )}
                <div className="bts-overlay">
                  <div className="bts-title">{item.title}</div>
                  <div className="bts-subtitle">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
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
                  marginTop: '-1.9vw',
                  marginLeft: '-6.5vw',
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

        <div style={{ height: '1vw' }}></div>
      </div>

      {/* Modal Preview for Clicked Media */}
      {selectedMedia && (
        <div className="menu6-image-modal" onClick={closeModal}>
          {selectedMedia.type === 'video' ? (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={selectedMedia.src}
              alt="enlarged"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Menu6;