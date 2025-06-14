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
