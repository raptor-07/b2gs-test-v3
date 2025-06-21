// src/constants/lottieInteractivityConfigs.ts

/**
 * Type definition for Lottie interactivity config.
 * Extend as needed for more complex configs.
 */
export type LottieAction =
  | { type: "hold" }
  | { type: "click"; forceFlag?: boolean };
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
