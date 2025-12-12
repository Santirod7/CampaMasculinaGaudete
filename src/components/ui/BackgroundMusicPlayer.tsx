import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

// Declaración global para TypeScript
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const BackgroundMusicPlayer = () => {
  // Estados para controlar la UI
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Volumen de 0 a 100

  // Referencias al reproductor de YouTube
  const playerRef = useRef<HTMLDivElement>(null);
  const player = useRef<any>(null);

  // ID del video de YouTube
  const VIDEO_ID = "dQw4w9WgXcQ"; // Reemplázalo por el tuyo

  useEffect(() => {
    // Función para crear el reproductor
    const createPlayer = () => {
      if (playerRef.current) {
        player.current = new window.YT.Player(playerRef.current, {
          height: '1',
          width: '1',
          videoId: VIDEO_ID,
          playerVars: {
            controls: 0,
            loop: 1,
            playlist: VIDEO_ID,
            enablejsapi: 1,
            origin: window.location.origin,
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange, // Para sincronizar nuestro botón con el reproductor
          }
        });
      }
    };

    // Lógica para cargar la API de YouTube
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = createPlayer;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    } else {
      createPlayer();
    }
  }, [VIDEO_ID]);

  // Se ejecuta cuando el reproductor está listo para recibir comandos
  const onPlayerReady = (event: any) => {
    event.target.setVolume(volume);
  };

  // Se ejecuta cada vez que el video cambia de estado (Play, Pausa, etc.)
  const onPlayerStateChange = (event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  // Función del botón principal
  const togglePlayPause = () => {
    if (!player.current || !player.current.getPlayerState) return;
    
    if (isPlaying) {
      player.current.pauseVideo();
    } else {
      player.current.playVideo();
    }
  };

  // Función del slider de volumen
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    if (player.current && player.current.setVolume) {
      player.current.setVolume(newVolume);
    }
  };

  return (
    <>
      {/* 
        El <iframe> siempre está aquí, pero invisible.
        Lo ponemos fuera de la vista con `position: absolute` y `opacity: 0`.
      */}
      <div 
        ref={playerRef} 
        style={{ position: 'absolute', top: '-9999px', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      ></div>

      {/* Controlador visual flotante */}
      <div className="fixed bottom-6 left-6 z-[100] flex items-center gap-3 group">
        
        {/* BOTÓN PLAY/PAUSA */}
        <button
          onClick={togglePlayPause}
          className="w-14 h-14 bg-slate-800/80 backdrop-blur-md text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-amber-500/80 flex items-center justify-center border-2 border-slate-700"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying && volume > 0 ? (
            <Volume2 className="w-6 h-6" />
          ) : volume === 0 ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            // Ícono de PLAY inicial
            <Music className="w-6 h-6" />
          )}
        </button>
        
        {/* SLIDER DE VOLUMEN */}
        <div 
          className={`
            transition-all duration-300 ease-in-out
            bg-slate-800/80 backdrop-blur-md p-2 rounded-full border-2 border-slate-700
            ${isPlaying ? 'w-24 opacity-100' : 'w-0 opacity-0 pointer-events-none'}
          `}
        >
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-amber-500"
            aria-label="Control de volumen"
          />
        </div>

      </div>
    </>
  );
};

export default BackgroundMusicPlayer;