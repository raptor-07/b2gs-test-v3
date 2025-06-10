declare module "react-lottie-player" {
  import { ComponentType } from "react";

  interface LottiePlayerProps {
    animationData: object;
    play?: boolean;
    loop?: boolean;
    style?: React.CSSProperties;
    className?: string;
    speed?: number;
  }

  declare const Lottie: ComponentType<LottiePlayerProps>;
  export default Lottie;
}
