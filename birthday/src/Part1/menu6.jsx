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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
          margin-bottom: 8vw;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(6vw, 1fr));
          gap: 1.5vw;
          max-height: 35vh;
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

        .menu6-image-modal img {
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
          .menu6-gallery-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(14vw, 1fr));
            gap: 2.5vw;
            max-height: 40vh;
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
          marginTop: '3vw',
          marginBottom: '1.5vw',
          opacity: 0.7,
          letterSpacing: '0.05em'
        }}>
          ✨ Good old memories ✨
        </div>

        <div className="menu6-gallery-wrapper">
          {carouselImages.map((src, index) => (
            <div
              key={index}
              className="menu6-gallery-item"
              onClick={() => handleImageClick(src)}
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

      {selectedImage && (
        <div className="menu6-image-modal" onClick={closeModal}>
          <img
            src={selectedImage}
            alt="enlarged"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Menu6;