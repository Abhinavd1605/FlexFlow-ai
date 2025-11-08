import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '@/lib/sounds';

export const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Set initial mute state from localStorage if available
    const savedMute = localStorage.getItem('isSoundMuted');
    if (savedMute !== null) {
      const shouldMute = savedMute === 'true';
      setIsMuted(shouldMute);
      if (shouldMute) {
        soundManager.toggleMute();
      }
    } else {
      // Default to muted on first visit
      soundManager.toggleMute();
    }
  }, []);

  const toggleSound = () => {
    const newMuted = soundManager.toggleMute();
    setIsMuted(newMuted);
    localStorage.setItem('isSoundMuted', String(newMuted));
  };

  return (
    <button
      onClick={toggleSound}
      className="p-2 rounded-full hover:bg-accent transition-colors duration-200"
      aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      ) : (
        <Volume2 className="h-5 w-5 text-foreground" />
      )}
    </button>
  );
};
