'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';
import { LottiePlayer, LottieWrapper } from '@/components/lottie';
import { useAnimationData } from '@/components/lottie/hooks/useAnimationData';

const EARTH_ANIMATION_URL = '/assets/lottie/earth.json';

export function EarthAnimation({ className }: { className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const animationData = useAnimationData(EARTH_ANIMATION_URL);

  const handleLoad = () => {
    setIsLoaded(true);
    console.debug('Earth: Animation loaded');
  };

  // Don't render anything until animation data is loaded
  if (!animationData) {
    return (
      <LottieWrapper
        aspectRatio="1/1"
        className={cn('w-full max-w-[600px]', className)}
        skeletonClassName="bg-gray-100/50 dark:bg-gray-800/50"
      >
        <div className="w-full h-full" />
      </LottieWrapper>
    );
  }

  return (
    <LottieWrapper
      aspectRatio="1/1"
      className={cn('w-full max-w-[600px]', className)}
      skeletonClassName="bg-gray-100/50 dark:bg-gray-800/50"
    >
      <div
        className={cn(
          'w-full h-full transition-all duration-700',
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        )}
      >
        <LottiePlayer
          animationData={animationData}
          className="w-full h-full"
          onLoad={handleLoad}
          autoplay={false}
          loop={false}
          onEvent={(event) => {
            if (event === 'complete') {
              console.debug('Earth: Animation completed');
              setHasPlayed(true);
            }
          }}
          interactivity={{
            mode: 'scroll',
            actions: [
              {
                visibility: [0, 0.5],
                type: 'stop',
                frames: [0]
              },
              {
                visibility: [0.5, 1.0],
                type: hasPlayed ? 'stop' : 'play',
                frames: [0, 180]
              }
            ]
          }}
        />
      </div>
    </LottieWrapper>
  );
}
