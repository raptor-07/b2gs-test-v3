import type { AnimationConfig } from 'lottie-web';
import type { LottieRef, LottieRefCurrentProps } from 'lottie-react';

// Re-export necessary types from lottie-react
export type { LottieRef, LottieRefCurrentProps };

// Event types
export type LottieEvent =
  | 'load'
  | 'error'
  | 'play'
  | 'pause'
  | 'stop'
  | 'loop'
  | 'complete'
  | 'frame';

// Animation configuration with path support
export interface AnimationConfigWithPath extends Omit<AnimationConfig, 'container'> {
  path?: string;
}

// Extended options for our implementation
export interface LottieOptions extends AnimationConfigWithPath {
  lottieRef?: LottieRef;
  onComplete?: () => void;
  onLoopComplete?: () => void;
  onEnterFrame?: () => void;
  onSegmentStart?: () => void;
  onConfigReady?: () => void;
  onDataReady?: () => void;
  onDataFailed?: () => void;
  onLoadedImages?: () => void;
  onDOMLoaded?: () => void;
  onDestroy?: () => void;
}

// Interactivity types that match lottie-react's implementation
export type InteractivityMode = 'scroll' | 'cursor';
export type ActionType = 'seek' | 'play' | 'stop' | 'loop';

export interface Action {
  visibility?: [number, number];
  position?: {
    x: number | [number, number];
    y: number | [number, number];
  };
  type: ActionType;
  frames: [number] | [number, number];
}

export type InteractivityAction = Action;

export interface InteractivityConfig {
  mode: InteractivityMode;
  actions: InteractivityAction[];
}
