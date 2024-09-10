'use client';

import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

export default function Page() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'Arial', 
      background: 'linear-gradient(135deg, #E0E0E0, #B0B0B0)', 
      color: '#333', 
      textAlign: 'center', 
      padding: '20px'
    }}>
      {/* Frame 1 */}
      <div style={{ 
        fontSize: '12px', 
        color: '#666', 
        marginBottom: '100px'
      }}>
        TOCANDO DA SUA BIBLIOTECA
      </div>
      
      {/* Frame 2 */}
      <img 
        src="./public/album-cachorrao.png" 
        alt="Álbum" 
        style={{ 
          width: '200px', 
          height: '200px', 
          borderRadius: '10px', 
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
          marginBottom: '20px'
        }} 
      />
      
      {/* Frame 3 */}
      <div style={{ 
        fontSize: '16px', 
        fontWeight: 'bold', 
        marginBottom: '5px' 
      }}>
        Quero me casar, mas minha mãe não deixa
      </div>
      <div style={{ 
        fontSize: '12px', 
        color: '#666', 
        marginBottom: '16px' 
      }}>
        Cachorrão do Brega
      </div>
      <div style={{ 
        fontSize: '12px', 
        color: '#666', 
        borderTop: '1px solid #666',
        width: '200px', 
        margin: '0 auto',
        paddingTop: '5px',
        marginBottom: '16px' 
      }}>
        3:49
      </div>
      
      {/* Frame 4 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center' 
      }}>
        <FaBackward 
          size={24} 
          color="#666" 
          style={{ marginRight: '10px' }}
        />
        <div 
          onClick={togglePlay}
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#1DB954', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: 'pointer', 
            margin: '0 16px'
          }}
        >
          {playing ? <FaPause size={30} color="#fff" /> : <FaPlay size={30} color="#fff" />}
        </div>
        <FaForward 
          size={24} 
          color="#666" 
          style={{ marginLeft: '10px' }}
        />
      </div>

      {/* Display the SVG Icons */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '20px' 
      }}>
        <img src="/icons/vercel.svg" alt="Vercel" style={{ width: '50px', height: 'auto', margin: '0 10px' }} />
        <img src="/icons/next.svg" alt="Next.js" style={{ width: '50px', height: 'auto', margin: '0 10px' }} />
      </div>
      
      <audio ref={audioRef} src="/audios/03 CACHORRÃO-DO-BREGA-2020.mp3" />
    </div>
  );
}
