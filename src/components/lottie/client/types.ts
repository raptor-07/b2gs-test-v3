import type { LottieRef } from 'lottie-react';

// Types from legacy player for compatibility during migration
type LottiePlayerType = {
  play: () => void;
  pause: () => void;
  stop: () => void;
  setPlayerDirection: (direction: number) => void;
  setSeeker: (frame: number) => void;
  state: {
    frame: number;
    totalFrames: number;
  };
};

export type LottieEvent =
  | 'load'
  | 'error'
  | 'play'
  | 'pause'
  | 'stop'
  | 'loop'
  | 'complete'
  | 'frame';

export interface LottieOptions {
  loop?: boolean | number;
  autoplay?: boolean;
  initialSegment?: [number, number];
  onComplete?: () => void;
  onLoopComplete?: () => void;
  onEnterFrame?: () => void;
  onLoad?: () => void;
  lottieRef?: React.RefObject<LottieRef>;
}

export type InteractivityMode = 'scroll' | 'cursor';

export interface InteractivityAction {
  frames: [number, number] | [number];
  type: 'seek' | 'play' | 'stop' | 'loop';
  visibility?: [number, number];
  position?: {
    x: number | [number, number];
    y: number | [number, number];
  };
}

export interface InteractivityConfig {
  mode: InteractivityMode;
  actions: InteractivityAction[];
}

// Legacy type for backwards compatibility
export type { LottiePlayerType };
