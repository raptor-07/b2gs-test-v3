import type { Player } from "@lottiefiles/react-lottie-player";

export type LottieEvent = "load" | "error" | "play" | "pause" | "stop" | "loop" | "complete" | "frame";

export interface LottiePlayerProps {
  animationUrl: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  onLoad?: () => void;
  onEvent?: (event: LottieEvent) => void;
  playerRef?: React.RefObject<Player>;
  style?: React.CSSProperties;
}
