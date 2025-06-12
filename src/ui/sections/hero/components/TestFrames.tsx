'use client';

import { useRef, useEffect } from 'react';
import { useLottie } from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';
import { useAnimationData } from '@/components/lottie/hooks/useAnimationData';

interface LottieData {
  ip: number;  // in point
  op: number;  // out point
  fr: number;  // frame rate
  w: number;   // width
  h: number;   // height
  nm: string;  // name
  ddd: number; // 3d flag
  v: string;   // version
}

const ANIMATION_URL = '/assets/lottie/closetheloop.json';

export function TestFrames() {
  const animationData = useAnimationData(ANIMATION_URL) as LottieData;
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const { View } = useLottie({
    animationData,
    lottieRef,
    autoplay: true,
    loop: true,
    onConfigReady: () => {
      // Log the duration in frames when the animation is ready
      const animItem = lottieRef.current?.animationItem;
      if (animItem) {
        const frames = animItem.totalFrames;
        const duration = lottieRef.current?.getDuration(true) || 0;
        console.log('-------------- ANIMATION INFO --------------');
        console.log('Total frames:', frames);
        console.log('Duration (frames):', duration);
        console.log('Animation Item:', {
          firstFrame: animItem.firstFrame,
          currentFrame: animItem.currentFrame,
          totalFrames: animItem.totalFrames,
          frameRate: animItem.frameRate,
          playDirection: animItem.playDirection,
        });
      }
    }
  });

  useEffect(() => {
    // Log animation data structure
    if (animationData) {
      console.log('Animation Data from JSON:', {
        inPoint: animationData.ip,
        outPoint: animationData.op,
        frameRate: animationData.fr,
        totalFrames: animationData.op - animationData.ip,
        dimensions: `${animationData.w}x${animationData.h}`,
        name: animationData.nm,
        version: animationData.v,
      });
      console.log('-----------------------------------------');
    }
  }, [animationData]);

  return (
    <div style={{ width: 100, height: 100, border: '1px solid #ccc' }}>
      {View}
    </div>
  );
}
