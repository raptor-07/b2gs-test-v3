/**
 * Type definition for Lottie interactivity config.
 * Extend as needed for more complex configs.
 */
export type LottieAction =
  | {
      type: "loop";
      position?: { x: number | [number, number]; y: number | [number, number] };
      frames?: number[];
      state?: string;
      transition?: string;
    }
  | {
      type: "hold";
      position?: { x: number | [number, number]; y: number | [number, number] };
      frames?: number[];
      state?: string;
      transition?: string;
    }
  | {
      type: "stop";
      position?: { x: number | [number, number]; y: number | [number, number] };
      frames?: number[];
      state?: string;
      transition?: string;
    }
  | { type: "click"; forceFlag?: boolean; state?: string; transition?: string }
  | {
      type: "seek";
      position?: { x: number | [number, number]; y: number | [number, number] };
      frames?: number[];
      state?: string;
      transition?: string;
    }
  | {
      // For chain mode, allow actions with state and transition without type
      state: string;
      transition: string;
      frames: number[];
    };
// Add more action types as needed

export interface LottieInteractivityConfig {
  player: string;
  mode: "cursor" | "chain" | "scroll" | string;
  actions: LottieAction[];
  container?: string;
}

/**
 * Example: Hover-hold interactivity config.
 */
export const hoverHoldConfig: LottieInteractivityConfig = {
  player: "", // To be set dynamically (e.g., "#playerId")
  mode: "cursor",
  actions: [
    {
      type: "hold",
    },
  ],
};

export const earthAnimationChainConfig: LottieInteractivityConfig = {
  player: "",
  mode: "chain",
  actions: [
    {
      state: "autoplay",
      transition: "onComplete",
      frames: [0, 600],
    },
    {
      state: "loop",
      transition: "none",
      frames: [600, 1000],
    },
  ],
};

/**
 * Example: Click-to-play interactivity config.
 */
export const clickPlayConfig: LottieInteractivityConfig = {
  player: "",
  mode: "cursor",
  actions: [
    {
      type: "click",
      forceFlag: false,
    },
  ],
};

/**
 * Add more configs below as needed.
 */

export const lottieInteractivityConfigs = {
  hoverHold: hoverHoldConfig,
  clickPlay: clickPlayConfig,
};
