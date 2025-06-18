import { useState, useEffect, useRef, useCallback } from 'react';
import type { LottieRefCurrentProps } from 'lottie-react';

interface UseLottieStateProps {
  totalFrames: number;
  onFrameChange?: (frame: number) => void;
  initialFrame?: number;
  debug?: boolean;
}

interface UseLottieStateReturn {
  currentFrame: number;
  lottieRef: React.RefObject<LottieRefCurrentProps>;
  isPlaying: boolean;
  handleEnterFrame: (frame: number) => void;
  setIsPlaying: (playing: boolean) => void;
  goToFrame: (frame: number) => void;
}

export function useLottieState({ 
  totalFrames, 
  onFrameChange,
  initialFrame = 0,
  debug = false
}: UseLottieStateProps): UseLottieStateReturn {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [currentFrame, setCurrentFrame] = useState(initialFrame);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnterFrame = useCallback((frame: number) => {
    setCurrentFrame(frame);
    onFrameChange?.(frame);
    
    if (debug) {
      console.debug('[Lottie] Frame:', frame);
    }
  }, [onFrameChange, debug]);

  const goToFrame = useCallback((frame: number) => {
    const animItem = lottieRef.current?.animationItem;
    if (!animItem) return;

    const targetFrame = Math.max(0, Math.min(frame, totalFrames));
    animItem.goToAndStop(targetFrame, true);
    setCurrentFrame(targetFrame);

    if (debug) {
      console.debug('[Lottie] Go to frame:', targetFrame);
    }
  }, [totalFrames, debug]);

  // Update animation state when isPlaying changes
  useEffect(() => {
    const animItem = lottieRef.current?.animationItem;
    if (!animItem) return;

    // Store current animation item and state for cleanup
    const currentAnimItem = animItem;
    const wasPlaying = isPlaying;

    if (debug) {
      console.debug('[Lottie] State change:', {
        isPlaying,
        currentFrame,
        totalFrames
      });
    }

    if (isPlaying) {
      // Play forward from current position
      currentAnimItem.setDirection(1);
      currentAnimItem.playSegments([currentFrame, totalFrames], true);
    } else {
      // Play backward from current position
      currentAnimItem.setDirection(-1);
      currentAnimItem.playSegments([currentFrame, 0], true);
    }

    return () => {
      try {
        if (currentAnimItem && currentAnimItem.isPaused) {
          const targetFrame = wasPlaying ? totalFrames : 0;
          currentAnimItem.goToAndStop(targetFrame, true);

          if (debug) {
            console.debug('[Lottie] Cleanup - Going to frame:', targetFrame);
          }
        }
      } catch (error) {
        if (debug) {
          console.debug('[Lottie] Cleanup error:', error);
        }
      }
    };
  }, [isPlaying, currentFrame, totalFrames, debug]);

  // Reset animation when component unmounts
  useEffect(() => {
    const currentAnimItem = lottieRef.current?.animationItem;

    return () => {
      try {
        if (currentAnimItem && currentAnimItem.isPaused) {
          currentAnimItem.goToAndStop(0, true);
          if (debug) {
            console.debug('[Lottie] Unmount - Reset to start');
          }
        }
      } catch (error) {
        if (debug) {
          console.debug('[Lottie] Unmount error:', error);
        }
      }
    };
  }, [debug]);

  return {
    currentFrame,
    lottieRef,
    isPlaying,
    handleEnterFrame,
    setIsPlaying,
    goToFrame
  };
}
