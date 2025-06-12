'use client';

import { useRef } from 'react';
import type { LottieRef } from 'lottie-react';
import { LottieBase } from './LottieBase';
import type { LottieEvent, LottieOptions, InteractivityConfig } from './types';

interface LottiePlayerProps {
  animationData: object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  onLoad?: () => void;
  onEvent?: (event: LottieEvent) => void;
  playerRef?: React.RefObject<LottieRef>;
  style?: React.CSSProperties;
  options?: LottieOptions;
  interactivity?: InteractivityConfig;
}

export function LottiePlayer({
  animationData,
  className = '',
  autoplay = false,
  loop = false,
  onLoad,
  onEvent,
  playerRef: externalRef,
  style,
  options = {},
  interactivity,
}: LottiePlayerProps) {
  const internalRef = useRef<LottieRef>(null);
  const ref = externalRef || internalRef;

  const defaultOptions: LottieOptions = {
    loop,
    autoplay,
    lottieRef: ref,
    onLoad,
    onComplete: () => onEvent?.('complete'),
    onLoopComplete: () => onEvent?.('loop'),
    onEnterFrame: () => onEvent?.('frame'),
  };

  return (
    <LottieBase
      animationData={animationData}
      className={className}
      style={style}
      options={{ ...defaultOptions, ...options }}
      interactivity={interactivity}
    />
  );
}
