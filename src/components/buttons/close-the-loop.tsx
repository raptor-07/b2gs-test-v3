'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { LottieWrapper } from '@/components/lottie';
import { LottiePlayer } from '@/components/lottie';
import { useAnimationData } from '@/components/lottie/hooks/useAnimationData';
import type { InteractivityConfig } from '@/components/lottie/client/types';

interface CloseTheLoopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ANIMATION_URL = '/assets/lottie/closetheloop.json';
const TOTAL_FRAMES = 100; // From animation data

const CloseTheLoopButton = forwardRef<
  HTMLButtonElement,
  CloseTheLoopButtonProps
>(({ className, ...props }, ref) => {
  const animationData = useAnimationData(ANIMATION_URL);

  // Configure cursor-based interaction with smoother transitions
  const interactivity: InteractivityConfig = {
    mode: 'cursor',
    actions: [
      {
        // When cursor is inside the button
        position: { x: [-0.2, 1.2], y: [-0.2, 1.2] },
        type: 'seek',
        frames: [0, TOTAL_FRAMES]
      },
      {
        // When cursor is near the button (transition zone)
        position: { x: [-0.5, -0.2], y: [-0.5, -0.2] },
        type: 'seek',
        frames: [TOTAL_FRAMES, Math.floor(TOTAL_FRAMES * 0.5)]
      },
      {
        // When cursor is far from button
        position: { x: [-1, -0.5], y: [-1, -0.5] },
        type: 'seek',
        frames: [Math.floor(TOTAL_FRAMES * 0.5), 0]
      }
    ]
  };

  return (
    <button
      ref={ref}
      className={cn(
        'text-mint-950 bg-yellow-200 px-4 py-2 rounded-full flex gap-2 items-center justify-center',
        'transition-opacity duration-300',
        className
      )}
      {...props}
    >
      <p className="text-sm">Let&#39;s close the loop</p>
      <LottieWrapper className="w-6 h-6">
        <div className={cn('w-full h-full')}>
          {animationData && (
            <LottiePlayer
              animationData={animationData}
              className="w-6 h-6"
              autoplay={false}
              loop={false}
              interactivity={interactivity}
            />
          )}
        </div>
      </LottieWrapper>
    </button>
  );
});

CloseTheLoopButton.displayName = 'CloseTheLoopButton';

export default CloseTheLoopButton;
