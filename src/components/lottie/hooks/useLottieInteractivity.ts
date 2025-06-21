// "use client";

// import { useCallback, useRef } from "react";
// import type { ILottie } from "@lottielab/lottie-player";

// export function useLottieInteractivity() {
//   // Keep track of whether refs were ready
//   const prevRefState = useRef<{
//     hadInteractivity: boolean;
//     wasInitialized: boolean;
//   }>({ hadInteractivity: false, wasInitialized: false });

//   const handleLottieInteractivity = useCallback(
//     (
//       lottieRef: React.RefObject<ILottie>,
//       eventType: "mouseEnter" | "mouseLeave"
//     ) => {
//       console.log("Handling Lottie interactivity", {
//         hasRef: !!lottieRef.current,
//         hasInteractivity: !!lottieRef.current?.interactivity,
//         eventType
//       });

//       if (!lottieRef.current) {
//         console.warn("Lottie ref is not available");
//         return;
//       }

//       // If interactivity becomes available when it wasn't before, log it
//       if (lottieRef.current.interactivity && !prevRefState.current.hadInteractivity) {
//         console.log("Interactivity became available", lottieRef.current.interactivity);
//         prevRefState.current.hadInteractivity = true;
//       }

//       // If the instance is initialized when it wasn't before, log it
//       // Check if the instance is ready by verifying it has essential methods
//       if (lottieRef.current && !prevRefState.current.wasInitialized) {
//         console.log("Lottie instance initialized", lottieRef.current);
//         prevRefState.current.wasInitialized = true;
//       }

//       if (!lottieRef.current.interactivity) {
//         console.warn("No interactivity available on Lottie instance");
//         return;
//       }

//       try {
//         // Get current state from the interactivity API
//         const currentState = lottieRef.current.interactivity.state;
//         console.log("Current interactivity state:", currentState);

//         // Check if current state has the event listener
//         if (!currentState?.on?.[eventType]) {
//           console.warn(`No handler for ${eventType} in state:`, currentState);
//           return;
//         }

//         const action = currentState.on[eventType];
//         console.log("Executing action:", action);

//         // Execute the action using the interactivity API
//         if (action.goTo) {
//           const options: Record<string, unknown> = {};

//           if (action.startAt) {
//             options.startAt = action.startAt;
//           }

//           if (action.duration !== undefined) {
//             options.duration = action.duration;
//           }

//           console.log("Calling goToState with:", {
//             state: action.goTo,
//             options
//           });

//           // Use the goToState method from the interactivity API
//           lottieRef.current.interactivity.goToState(action.goTo, options);
//         }
//       } catch (error) {
//         console.error("Error handling Lottie interactivity:", error);
//         console.error("Current ref state:", {
//           ref: lottieRef.current,
//           interactivity: lottieRef.current?.interactivity,
//           isInitialized: !!lottieRef.current?.play
//         });
//       }
//     },
//     []
//   );

//   return { handleLottieInteractivity };
// }
