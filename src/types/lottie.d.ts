declare module "@lottiefiles/react-lottie-player" {
  export interface IPlayerState {
    frame: number;
    totalFrames: number;
    currentState: string;
    seeker: number;
    playerSpeed: number;
    autoplay: boolean;
    loop: boolean;
    direction: number;
  }

  export interface Player {
    state: Readonly<IPlayerState>;
    play(): void;
    pause(): void;
    stop(): void;
    setSeeker(frame: number, play?: boolean): void;
    setPlayerDirection(direction: 1 | -1): void;
    setPlayerSpeed(speed?: number): void;
  }
}

// Add support for lottie-player web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          src?: string;
          autoplay?: boolean;
          controls?: boolean;
          loop?: boolean;
          mode?: string;
          speed?: number;
          style?: React.CSSProperties;
          ref?: React.Ref<HTMLElement>;
        },
        HTMLElement
      >;
    }
  }
}

export {};
