import { Button, ButtonProps } from "@/components/ui/button";
import { soundManager } from "@/lib/sounds";
import { ComponentProps, forwardRef } from "react";

type SoundType = 'softClick' | 'hardClick';

interface SoundButtonProps extends ButtonProps {
  soundType?: SoundType;
  soundVolume?: number;
}

export const SoundButton = forwardRef<HTMLButtonElement, SoundButtonProps>(
  ({ children, onClick, soundType = 'softClick', soundVolume = 0.3, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      soundManager.play(soundType, soundVolume);
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <Button ref={ref} onClick={handleClick} {...props}>
        {children}
      </Button>
    );
  }
);

SoundButton.displayName = 'SoundButton';
