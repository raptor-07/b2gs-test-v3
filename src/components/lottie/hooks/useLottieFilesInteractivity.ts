"use client";

// import { useRef } from "react";

// Type for LottieFiles interactivity instance
// type LottieInteractivityInstance = unknown;

export function useLottieFilesInteractivity() {
  // const interactivityInstances = useRef<
  //   Map<string, LottieInteractivityInstance>
  // >(new Map());

  const setupInteractivity = async (
    playerId: string,
    containerId?: string,
    playerRef?: React.Ref<HTMLElement>
  ) => {
    try {
      // Import lottie-interactivity dynamically
      const { create } = await import("@lottiefiles/lottie-interactivity");

      // Check if interactivity is already set up for this player
      // if (interactivityInstances.current.has(playerId)) {
      //   return;
      // }

      // Configure interactivity for hover effects
      const interactivityConfig = {
        player: `#${playerId}`,
        mode: "cursor",
        actions: [
          {
            type: "hold",
          },
        ],
      };

      // If container is provided, add it to config
      if (containerId) {
        (
          interactivityConfig as typeof interactivityConfig & {
            container: string;
          }
        ).container = `#${containerId}`;
      }

      // console.log(
      //   `Setting up Lottie interactivity for player: `,
      //   interactivityConfig
      // );

      // console.log("interactivityInstances:", interactivityInstances.current);

      // if (
      //   playerRef
      //   // &&
      //   // typeof playerRef !== "function" &&
      //   // "current" in playerRef &&
      //   // playerRef.current
      // ) {
      //   playerRef.current.addEventListener("load", () => {
      //     console.log(
      //       `Lottie player ${playerId} loaded, setting up interactivity...`
      //     );
      //     create(interactivityConfig);
      //     console.log(`Lottie interactivity set up for player: ${playerId}`);
      //   });
      // }
      if (playerRef.current) {
        playerRef.current.addEventListener("load", () => {
          console.log(
            `Lottie player ${playerId} loaded, setting up interactivity...`
          );
          create(interactivityConfig);
        });
      }
      // create(interactivityConfig);
    } catch (error) {
      console.error("Error setting up Lottie interactivity:", error);
    }
  };

  return {
    setupInteractivity,
  };
}
