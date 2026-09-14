import React, { useState, useEffect, useRef } from 'react';

const Menu1 = () => {
  const [charCount, setCharCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(5);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const words = ["A Happy", "Birthday."];
  const currentWord = words[wordIndex];
  
  const audioRef = useRef(null);
  const dropdownRef = useRef(null);

  const albums = [
    {
      albumTitle: "LANY (2017)",
      tracks: [
        { title: "Dumb Stuff", artist: "LANY", url: "LANY - Dumb Stuff.mp3", artwork: "LANY.jpg" },
        { title: "The Breakup", artist: "LANY", url: "LANY - The Breakup.mp3", artwork: "LANY.jpg" },
        { title: "Super Far", artist: "LANY", url: "LANY - Super Far.mp3", artwork: "LANY.jpg" },
        { title: "Overtime", artist: "LANY", url: "LANY - Overtime.mp3", artwork: "LANY.jpg" },
        { title: "Flowers On The Floor", artist: "LANY", url: "LANY - Flowers On The Floor.mp3", artwork: "LANY.jpg" },
        { title: "Parents", artist: "LANY", url: "LANY - Parents.mp3", artwork: "LANY.jpg" },
        { title: "ILYSB", artist: "LANY", url: "LANY - ILYSB.mp3", artwork: "LANY.jpg" },
        { title: "13", artist: "LANY", url: "LANY - 13.mp3", artwork: "LANY.jpg" },
        { title: "Hericane", artist: "LANY", url: "LANY - Hericane.mp3", artwork: "LANY.jpg" },
        { title: "Hurts", artist: "LANY", url: "LANY - Hurts.mp3", artwork: "LANY.jpg" },
        { title: "Good Girls", artist: "LANY", url: "LANY - Good Girls.mp3", artwork: "LANY.jpg" },
        { title: "Pancakes", artist: "LANY", url: "LANY - Pancakes.mp3", artwork: "LANY.jpg" },
        { title: "Tampa", artist: "LANY", url: "LANY - Tampa.mp3", artwork: "LANY.jpg" },
        { title: "Purple Teeth", artist: "LANY", url: "LANY - Purple Teeth.mp3", artwork: "LANY.jpg" },
        { title: "So, So Pretty", artist: "LANY", url: "LANY - So, So Pretty.mp3", artwork: "LANY.jpg" },
        { title: "It Was Love", artist: "LANY", url: "LANY - It Was Love.mp3", artwork: "LANY.jpg" },
      ]
    },
    {
      albumTitle: "Malibu Nights (2018)",
      tracks: [
        { title: "Thick And Thin", artist: "LANY", url: "LANY - Thick And Thin.mp3", artwork: "MALIBU NIGHTS.jpg" },
        { title: "Taking Me Back", artist: "LANY", url: "LANY - Taking Me Back.mp3", artwork: "MALIBU NIGHTS.jpg" },
        { title: "If You See Her", artist: "LANY", url: "LANY - If You See Her.mp3", artwork: "MALIBU NIGHTS.jpg" },
        { title: "I Don't Wanna Love You Anymore", artist: "LANY", url: "LANY - I Don't Wanna Love You Anymore.mp3", artwork: "MALIBU NIGHTS.jpg" },
        { title: "Let Me Know", artist: "LANY", url: "LANY - Let Me Know.mp3", artwork: "MALIBU NIGHTS.jpg" },
        { title: "Run", artist: "LANY", url: "LANY - Run.mp3", artwork: "MALIBU NIGHTS.jpg" },
        { title: "Valentine's Day", artist: "LANY", url: "LANY - Valentine's Day.mp3", artwork: "MALIBU NIGHTS.jpg" },
        { title: "Thru These Tears", artist: "LANY", url: "LANY - Thru These Tears.mp3", artwork: "MALIBU NIGHTS.jpg" },
        { title: "Malibu Nights", artist: "LANY", url: "LANY - Malibu Nights.mp3", artwork: "MALIBU NIGHTS.jpg" },
      ]
    },
    {
      albumTitle: "Mama's Boy (2020)",
      tracks: [
       { title: "you!", artist: "LANY", url: "LANY - you!.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "cowboy in LA", artist: "LANY", url: "LANY - cowboy in LA.mp3", artwork: " MAMA'S BOY.jpg" },
        { title: "heart won't let me", artist: "LANY", url: "LANY - heart won't let me.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "if this is the last time", artist: "LANY", url: "LANY - if this is the last time.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "i still talk to jesus", artist: "LANY", url: "LANY - i still talk to jesus.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "paper", artist: "LANY", url: "LANY - paper.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "good guys", artist: "LANY", url: "LANY - good guys.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "sharing you", artist: "LANY", url: "LANY - sharing you.mp3", artwork: " MAMA'S BOY.jpg" }, 
        { title: "bad news", artist: "LANY", url: "LANY - bad news.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "when you're drunk", artist: "LANY", url: "LANY - when you're drunk.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "anything 4 u", artist: "LANY", url: "LANY - anything 4 u.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "sad", artist: "LANY", url: "LANY - sad.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "Tampa", artist: "LANY", url: "LANY - Tampa.mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "(what i wish just one person would say to me)", artist: "LANY", url: "LANY - (what i wish just one person would say to me).mp3", artwork: "MAMA'S BOY.jpg" },
        { title: "nobody else", artist: "LANY", url: "LANY - nobody else.mp3", artwork: "MAMA'S BOY.jpg" },
      ]
    },
    {
      albumTitle: "gg bb xx (2021)",
      tracks: [
        { title: "get away", artist: "LANY", url: "LANY - you!.mp3", artwork: "GGBBXX.jpg" },
        { title: "up to me", artist: "LANY", url: "LANY - up to me.mp3", artwork: "GGBBXX.jpg" },
        { title: "never mind, let's break up", artist: "LANY", url: "LANY - never mind, let's break up.mp3", artwork: "GGBBXX.jpg" },
        { title: "dna", artist: "LANY", url: "LANY - dna.mp3", artwork: "GGBBXX.jpg" },
        { title: "roll over, baby", artist: "LANY", url: "LANY - roll over, baby.mp3", artwork: "GGBBXX.jpg" },
        { title: "live it down", artist: "LANY", url: "LANY - live it down.mp3", artwork: "GGBBXX.jpg" },
        { title: "dancing in the kitchen", artist: "LANY", url: "LANY - dancing in the kitchen.mp3", artwork: "GGBBXX.jpg" },
        { title: "ex i never had", artist: "LANY", url: "LANY - ex i never had.mp3", artwork: "GGBBXX.jpg" },
        { title: "somewhere", artist: "LANY", url: "LANY - somewhere.mp3", artwork: "GGBBXX.jpg" },
        { title: "careless", artist: "LANY", url: "LANY - careless.mp3", artwork: "GGBBXX.jpg" },
        { title: "'til i don't", artist: "LANY", url: "LANY - 'til i don't.mp3", artwork: "GGBBXX.jpg" },
        { title: "one minute left to live", artist: "LANY", url: "LANY - one minute left to live.mp3", artwork: "GGBBXX.jpg" },
        { title: "i die first", artist: "LANY", url: "LANY - i die first.mp3", artwork: "GGBBXX.jpg" },
        { title: "remember that", artist: "LANY", url: "LANY - remember that.mp3", artwork: "GGBBXX.jpg" },
        { title: "i didn't lie", artist: "LANY", url: "LANY - i didn't lie.mp3", artwork: "GGBBXX.jpg" },
        { title: "they don't make 'em like you anymore", artist: "LANY", url: "LANY - they don't make 'em like you anymore.mp3", artwork: "GGBBXX.jpg" },
        { title: "the older you get, the less you cry", artist: "LANY", url: "LANY - the older you get, the less you cry.mp3", artwork: "GGBBXX.jpg" },
        { title: "dna [demo]", artist: "LANY", url: "LANY - dna [demo].mp3", artwork: "GGBBXX.jpg" },
        { title: "Stupid Feelings", artist: "220KID & LANY", url: "220KID & LANY - Stupid Feelings.mp3", artwork: "GGBBXX.jpg" },
        { title: "i quit drinking", artist: "Kelsea Ballerini & LANY", url: "Kelsea Ballerini & LANY - I Quit Drinking.mp3", artwork: "GGBBXX.jpg" },
      ]
    },
    {
      albumTitle: "a beautiful blur (2023)",
      tracks: [
          { title: "XXL", artist: "LANY", url: "LANY - XXL.mp3", artwork: "ABB.jpg" },
        { title: "Out Of My League", artist: "LANY", url: "LANY - Out Of My League.mp3", artwork: "ABB.jpg" },
        { title: "Sugar & Cinnamon", artist: "LANY", url: "LANY - Sugar & Cinnamon.mp3", artwork: "ABB.jpg" },
        { title: "I Pray", artist: "LANY", url: "LANY - I Pray.mp3", artwork: "ABB.jpg" },
        { title: "Home Is Where The Hurt Is", artist: "LANY", url: "LANY - Home Is Where The Hurt Is.mp3", artwork: "ABB.jpg" },
        { title: "It Even Rains In LA", artist: "LANY", url: "LANY - It Even Rains In LA.mp3", artwork: "ABB.jpg" },
        { title: "Heartbreak Can Wait", artist: "LANY", url: "LANY - Heartbreak Can Wait.mp3", artwork: "ABB.jpg" },
        { title: "(Saturday Night) 3:22 A.M.", artist: "LANY", url: "LANY - (Saturday Night) 3_22 A.M..mp3", artwork: "ABB.jpg" }, 
        { title: "Love At First Fight", artist: "LANY", url: "LANY - Love At First Fight.mp3", artwork: "ABB.jpg" },
        { title: "Congrats", artist: "LANY", url: "LANY - Congrats.mp3", artwork: "ABB.jpg" },
        { title: "'Cause You Have To", artist: "LANY", url: "LANY - 'Cause You Have To.mp3", artwork: "ABB.jpg" },
        { title: "Alonica", artist: "LANY", url: "LANY - Alonica.mp3", artwork: "ABB.jpg" },
        { title: "No", artist: "LANY", url: "LANY - No.mp3", artwork: "ABB.jpg" },
      ]
    },
    {
      albumTitle: "Soft / Soft 2 (2025/2026)",
      tracks: [
   { title: "Soft", artist: "LANY", url: "LANY - Soft.mp3", artwork: "SOFT.jpg" },
        { title: "Why", artist: "LANY", url: "LANY - Why.mp3", artwork: "SOFT.jpg" },
        { title: "Know You Naked", artist: "LANY", url: "LANY - Know You Naked.mp3", artwork: "SOFT.jpg" },
        { title: "Stuck", artist: "LANY", url: "LANY - Stuck.mp3", artwork: "SOFT.jpg" },
        { title: "Sound Of Rain", artist: "LANY", url: "LANY - Sound Of Rain.mp3", artwork: "SOFT.jpg" },
        { title: "Act My Age", artist: "LANY", url: "LANY - Act My Age.mp3", artwork: "SOFT.jpg" },
        { title: "Good Parts", artist: "LANY", url: "LANY - Good Parts.mp3", artwork: "SOFT.jpg" },
        { title: "Make Me Forget", artist: "LANY", url: "LANY - Make Me Forget.mp3", artwork: "SOFT.jpg" },
        { title: "Destiny", artist: "LANY", url: "LANY - Destiny.mp3", artwork: "SOFT.jpg" },
        { title: "Last Forever", artist: "LANY", url: "LANY - Last Forever.mp3", artwork: "SOFT.jpg" },
        { title: "I'm Doing Alright", artist: "LANY", url: "LANY - I'm Doing Alright.mp3", artwork: "SOFT.jpg" },
        { title: "Prettiest Thing I've Ever Seen", artist: "LANY", url: "LANY - Prettiest Thing I've Ever Seen.mp3", artwork: "SOFT.jpg" },
        { title: "How To Hold An Angel", artist: "LANY", url: "LANY - How To Hold An Angel.mp3", artwork: "SOFT.jpg" },
        { title: "When Did You Stop Loving Me?", artist: "LANY", url: "LANY - When Did You Stop Loving Me.mp3", artwork: "SOFT.jpg" },
        { title: "Finish Me", artist: "LANY", url: "LANY - Finish Me.mp3", artwork: "SOFT.jpg" },
      ]
    }
  ];

  const currentTracks = albums[currentAlbumIndex].tracks;

  useEffect(() => {
    let timeout;
    
    const runAnimation = (count, index) => {
      setCharCount(count);
      setWordIndex(index);
      
      if (count < words[index].length) {
        timeout = setTimeout(() => runAnimation(count + 1, index), 150);
      } else {
        timeout = setTimeout(() => runAnimation(0, (index + 1) % words.length), 5000);
      }
    };

    runAnimation(0, 0);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        setIsPlaying(false);
      });
    }
  }, [currentAlbumIndex, currentTrackIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => console.log(e));
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % currentTracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + currentTracks.length) % currentTracks.length);
  };

  const handleAlbumSelect = (index) => {
    setCurrentAlbumIndex(index);
    setCurrentTrackIndex(0);
    setIsDropdownOpen(false);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div 
      onClick={() => {
        if (!isPlaying && audioRef.current && audioRef.current.paused) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#072ac8',
        color: '#efefd0',
        fontFamily: '"Poppins", sans-serif',
        padding: '4vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
        cursor: 'default'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');
        
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 0.7vw;
          height: 0.7vw;
          border-radius: 50%;
          background: #efefd0;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.3);
        }

        .album-option:hover {
          background-color: rgba(239, 239, 208, 0.15) !important;
        }

        .player-btn {
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .player-btn:hover {
          transform: scale(1.15);
          opacity: 1 !important;
        }
      `}</style>
      
      <audio 
        ref={audioRef} 
        src={currentTracks[currentTrackIndex].url} 
        onEnded={nextTrack}
        autoPlay
        playsInline
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <img 
              src="yodalogo.png" 
              alt="Custom Logo" 
              style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
            />
          </div>
          <div style={{ fontSize: '1.1vw', lineHeight: '1.5' }}>
            <div style={{ marginBottom: '0.2rem' }}>September 22, 2026</div>
            <div style={{ fontWeight: '700', fontSize: '1.3vw', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>A Very Simple Special Gift For Adoy</div>
            <div>From yours truly, Jexy.</div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '1vw'
        }}>
          <div ref={dropdownRef} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.8vw' }}>
            <span style={{ fontSize: '0.85vw', fontWeight: '600', opacity: '0.85', letterSpacing: '0.02em' }}>Select Album</span>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1vw',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                color: '#efefd0',
                border: '1px solid rgba(239, 239, 208, 0.25)',
                borderRadius: '1.5rem',
                padding: '0.6vw 1.2vw',
                fontSize: '0.9vw',
                fontFamily: '"Poppins", sans-serif',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                outline: 'none',
                minWidth: '13vw',
                transition: 'background-color 0.2s ease'
              }}
            >
              <span style={{ fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{albums[currentAlbumIndex].albumTitle}</span>
              <span style={{ fontSize: '0.7vw', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▼</span>
            </button>

            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                right: '0',
                top: '100%',
                marginTop: '0.5vw',
                width: '15vw',
                backgroundColor: '#051f96',
                border: '1px solid rgba(239, 239, 208, 0.25)',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                overflow: 'hidden',
                zIndex: 100,
                backdropFilter: 'blur(12px)',
                animation: 'fadeIn 0.2s ease'
              }}>
                {albums.map((album, index) => (
                  <div 
                    key={index}
                    className="album-option"
                    onClick={() => handleAlbumSelect(index)}
                    style={{
                      padding: '0.7vw 1.2vw',
                      fontSize: '0.85vw',
                      cursor: 'pointer',
                      fontWeight: currentAlbumIndex === index ? '700' : '400',
                      backgroundColor: currentAlbumIndex === index ? 'rgba(239, 239, 208, 0.15)' : 'transparent',
                      color: '#efefd0',
                      borderBottom: index !== albums.length - 1 ? '1px solid rgba(239, 239, 208, 0.1)' : 'none',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    {album.albumTitle}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.2vw',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            padding: '0.7vw 1.4vw',
            borderRadius: '2rem',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(239, 239, 208, 0.3)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.3)'
          }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={currentTracks[currentTrackIndex].artwork} 
                alt="Artwork" 
                style={{ width: '3.4vw', height: '3.4vw', borderRadius: '0.8vw', objectFit: 'cover', boxShadow: '0 6px 15px rgba(0,0,0,0.4)', display: 'block' }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '0.8vw',
                border: '1px solid rgba(255,255,255,0.15)',
                pointerEvents: 'none'
              }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '11vw' }}>
              <span style={{ fontSize: '0.9vw', fontWeight: '700', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', letterSpacing: '-0.01em' }}>
                {currentTracks[currentTrackIndex].title}
              </span>
              <span style={{ fontSize: '0.75vw', opacity: '0.75', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.1vw' }}>
                {currentTracks[currentTrackIndex].artist}
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9vw', marginLeft: '0.4vw' }}>
              <button className="player-btn" onClick={prevTrack} style={{ background: 'none', border: 'none', color: '#efefd0', cursor: 'pointer', fontSize: '1.1vw', opacity: '0.85', padding: '0' }}>⏮</button>
              <button className="player-btn" onClick={togglePlay} style={{ 
                background: 'rgba(239, 239, 208, 0.15)', 
                border: '1px solid rgba(239, 239, 208, 0.3)', 
                color: '#efefd0', 
                cursor: 'pointer', 
                fontSize: '1vw', 
                width: '2.4vw', 
                height: '2.4vw', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}>{isPlaying ? '⏸' : '▶'}</button>
              <button className="player-btn" onClick={nextTrack} style={{ background: 'none', border: 'none', color: '#efefd0', cursor: 'pointer', fontSize: '1.1vw', opacity: '0.85', padding: '0' }}>⏭</button>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6vw', marginLeft: '0.6vw', borderLeft: '1px solid rgba(239, 239, 208, 0.25)', paddingLeft: '1vw' }}>
              <span style={{ fontSize: '0.85vw', opacity: '0.85' }}>🔊</span>
              <input 
                type="range" 
                className="custom-slider"
                min="0" 
                max="1" 
                step="0.01" 
                value={volume} 
                onChange={handleVolumeChange} 
                style={{ width: '4.5vw', accentColor: '#efefd0', cursor: 'pointer', height: '3px', background: 'rgba(239,239,208,0.3)', borderRadius: '2px', appearance: 'none' }}
              />
              <span style={{ fontSize: '0.75vw', opacity: '0.85', minWidth: '2.2vw', textAlign: 'right', fontWeight: '600' }}>
                {Math.round(volume * 100)}%
              </span>
            </div>         
          </div>                    
        </div>
      </div>

      <div style={{ marginTop: '10vw', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: '1vw',
          fontWeight: '400',
          marginBottom: '5vw',
          paddingLeft: '0.5vw',
          paddingRight: '0.5vw'
        }}>
          <div style={{ display: 'flex', gap: '1vw' }}>
            <span>Jergen</span>
            <span>/</span>
            <span>Yoda</span>
            <span>/</span>
            <span>Aila Medel</span>
          </div>
          <div style={{ display: 'flex', gap: '2.5vw' }}>
            <span>"You deserve all the joy in the world."</span>
            <span>14 • 601 • 153</span>
            <span>Manila, Philippines</span>
          </div>
        </div>
        
        <div style={{
          fontSize: '21.5vw',
          fontWeight: '900',
          letterSpacing: '-0.06em',
          lineHeight: '0.75',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          color: '#efefd0',
          whiteSpace: 'nowrap'
        }}>
          <span>{currentWord.slice(0, charCount)}</span>
          <span style={{ color: 'transparent' }}>{currentWord.slice(charCount)}</span>
        </div>
      </div>
    </div>
  );
};

export default Menu1;