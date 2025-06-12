'use client';

import { useLottie, useLottieInteractivity } from 'lottie-react';
import type { LottieOptions, InteractivityConfig } from './types';

interface LottieBaseProps {
  animationData: object;
  options?: LottieOptions;
  interactivity?: InteractivityConfig;
  className?: string;
  style?: React.CSSProperties;
}

export function LottieBase({
  animationData,
  options = {},
  interactivity,
  className,
  style
}: LottieBaseProps) {
  const lottieObj = useLottie({
    animationData,
    loop: options.loop,
    autoplay: options.autoplay,
    initialSegment: options.initialSegment,
    onComplete: options.onComplete,
    onLoopComplete: options.onLoopComplete,
    onEnterFrame: options.onEnterFrame,
    onLoad: options.onLoad,
    lottieRef: options.lottieRef?.current || undefined,
  });

  // Apply container styles
  const containerStyle = {
    width: '100%',
    height: '100%',
    ...style
  };

  // Always call useLottieInteractivity to avoid conditional hook calls,
  // but use empty actions when interactivity is not needed
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: interactivity?.mode || 'cursor',
    actions: interactivity?.actions || [{ frames: [0], type: 'stop' }]
  });

  return (
    <div className={className} style={containerStyle}>
      {interactivity ? Animation : lottieObj.View}
    </div>
  );
}
