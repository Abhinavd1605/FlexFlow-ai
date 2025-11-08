// Sound effects paths
const SOUNDS = {
  softClick: '/mixkit-typewriter-soft-click-1125.wav',
  hardClick: '/mixkit-mouse-click-close-1113.wav'
} as const;

type SoundKey = keyof typeof SOUNDS;

class SoundManager {
  private static instance: SoundManager;
  private sounds: Map<string, HTMLAudioElement> = new Map();
  private isMuted = false;

  private constructor() {
    // Preload sounds
    Object.entries(SOUNDS).forEach(([key, path]) => {
      const audio = new Audio(path);
      audio.preload = 'auto';
      audio.volume = 0.5; // Default volume
      this.sounds.set(key, audio);
    });
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public play(sound: SoundKey, volume: number = 0.5): void {
    if (this.isMuted) return;
    
    const audio = this.sounds.get(sound);
    if (audio) {
      // Create a new audio instance to allow multiple plays
      const newAudio = audio.cloneNode() as HTMLAudioElement;
      newAudio.volume = volume;
      newAudio.play().catch(e => console.warn('Audio play failed:', e));
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    this.sounds.forEach(audio => {
      audio.muted = this.isMuted;
    });
    return this.isMuted;
  }

  public setVolume(volume: number): void {
    this.sounds.forEach(audio => {
      audio.volume = volume;
    });
  }
}

export const soundManager = SoundManager.getInstance();

// Custom hook for using sounds in components
import { useEffect, useRef } from 'react';

export const useSound = (sound: SoundKey, { volume = 0.5, playOnMount = false } = {}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (playOnMount) {
      soundManager.play(sound, volume);
    }
  }, [sound, volume, playOnMount]);

  const play = (customVolume?: number) => {
    soundManager.play(sound, customVolume ?? volume);
  };

  return { play };
};
