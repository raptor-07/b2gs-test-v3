"use client";

import { useCallback, useRef } from "react";

// Type for LottieFiles interactivity instance
type LottieInteractivityInstance = unknown;

export function useLottieFilesInteractivity() {
  const interactivityInstances = useRef<
    Map<string, LottieInteractivityInstance>
  >(new Map());

  const setupInteractivity = useCallback(
    async (playerId: string, containerId?: string) => {
      try {
        // Import lottie-interactivity dynamically
        const { create } = await import("@lottiefiles/lottie-interactivity");

        // Check if interactivity is already set up for this player
        if (interactivityInstances.current.has(playerId)) {
          return;
        }

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

        console.log(
          `Setting up Lottie interactivity for player: `,
          interactivityConfig
        );

        const instance = create(interactivityConfig);
        interactivityInstances.current.set(playerId, instance);

        console.log("Lottie interactivity instance created:", instance);
      } catch (error) {
        console.error("Error setting up Lottie interactivity:", error);
      }
    },
    []
  );

  return {
    setupInteractivity,
  };
}
