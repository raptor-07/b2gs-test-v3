declare module 'lottie-react' {
  import { ComponentType } from 'react';

  export interface LottieComponentProps {
    animationData: Record<string, unknown>;
    loop?: boolean;
    autoplay?: boolean;
    style?: React.CSSProperties;
    className?: string;
  }

  declare const Lottie: ComponentType<LottieComponentProps>;
  export default Lottie;
}
