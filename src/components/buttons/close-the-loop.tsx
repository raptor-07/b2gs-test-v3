'use client';

import { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { LottieWrapper } from '@/components/lottie';
import { LottiePlayer } from '@/components/lottie';
import { useAnimationData } from '@/components/lottie/hooks/useAnimationData';

interface CloseTheLoopButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ANIMATION_URL = '/assets/lottie/closetheloop.json';

const CloseTheLoopButton = forwardRef<
  HTMLButtonElement,
  CloseTheLoopButtonProps
>(({ className, ...props }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationData = useAnimationData(ANIMATION_URL);

  return (
    <button
      ref={ref}
      className={cn(
        'text-mint-950 bg-yellow-200 px-4 py-2 rounded-full flex gap-2 items-center justify-center',
        'transition-opacity duration-300',
        !isLoaded && 'opacity-95',
        className
      )}
      {...props}
    >
      <p className="text-sm">Let&#39;s close the loop</p>
      <LottieWrapper className="w-6 h-6">
        <div
          className={cn(
            'w-full h-full',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        >
          {animationData && (
            <LottiePlayer
              animationData={animationData}
              className="w-6 h-6"
              onLoad={() => setIsLoaded(true)}
              autoplay={false}
              loop={false}
              interactivity={{
                mode: 'cursor',
                actions: [
                  {
                    position: { x: [0, 1], y: [0, 1] },
                    type: 'seek',
                    frames: [0, 30]
                  },
                  {
                    position: { x: -1, y: -1 },
                    type: 'stop',
                    frames: [0]
                  }
                ]
              }}
            />
          )}
        </div>
      </LottieWrapper>
    </button>
  );
});

CloseTheLoopButton.displayName = 'CloseTheLoopButton';

export default CloseTheLoopButton;
