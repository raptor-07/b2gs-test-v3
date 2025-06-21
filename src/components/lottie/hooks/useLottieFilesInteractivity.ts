"use client";

export function useLottieFilesInteractivity() {
  const setupInteractivity = async (playerId: string, containerId?: string) => {
    try {
      // Validate the selector before proceeding
      if (!playerId || !isValidCSSSelector(playerId)) {
        console.error(`Invalid player ID for CSS selector: ${playerId}`);
        return;
      }

      // Import lottie-interactivity dynamically
      const { create } = await import("@lottiefiles/lottie-interactivity");

      // Configure interactivity for hover effects
      const interactivityConfig = {
        player: `#${playerId}`,
        mode: "cursor" as const,
        actions: [
          {
            type: "hold" as const,
          },
        ],
      };

      // If container is provided, add it to config
      if (containerId && isValidCSSSelector(containerId)) {
        (
          interactivityConfig as typeof interactivityConfig & {
            container: string;
          }
        ).container = `#${containerId}`;
      }

      console.log(`Setting up Lottie interactivity for player: ${playerId}`);

      create(interactivityConfig);
      console.log(`Lottie interactivity set up for player: ${playerId}`);
    } catch (error) {
      console.error("Error setting up Lottie interactivity:", error);
    }
  };

  return {
    setupInteractivity,
  };
}

// Helper function to validate CSS selectors
function isValidCSSSelector(selector: string): boolean {
  try {
    document.querySelector(`#${selector}`);
    return true;
  } catch {
    return false;
  }
}
