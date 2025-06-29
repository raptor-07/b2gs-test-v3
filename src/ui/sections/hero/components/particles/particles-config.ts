import type { ISourceOptions } from "@tsparticles/engine";

export const nasaConfig: ISourceOptions = {
  style: {
    filter: "blur(0px)",
  },
  particles: {
    duration: {
      value: 2,
    },
    number: {
      value: 200,
      density: {
        enable: true,
      },
    },
    color: {
      value: ["#05cd99", "#109078", "#147a71", "#166f6e"],
    },
    fpsLimit: 120,
    shape: {
      type: "circle",
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.8,
      },
      animation: {
        enable: true,
        speed: 0.2,
        sync: true,
      },
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
    move: {
      enable: true,
      speed: {
        min: 0.3,
        max: 1,
      },
      direction: "outside",
      random: true,
      straight: true,
      outModes: {
        default: "split",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 4,
        duration: 2,
        opacity: 0.8,
        color: "#05cd99",
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  background: {
    color: "transparent",
  },
  fullScreen: {
    enable: false,
    zIndex: -100,
  },
};

export const circularTransitionConfig: ISourceOptions = {
  style: {
    filter: "blur(0px)",
  },
  particles: {
    duration: {
      value: 1.5,
    },
    number: {
      value: 1000,
      density: {
        enable: true,
      },
    },
    color: {
      value: ["#05cd99", "#109078", "#147a71", "#166f6e"],
    },
    fpsLimit: 60,
    shape: {
      type: "circle",
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 1.5,
        sync: false,
      },
    },
    size: {
      value: {
        min: 1,
        max: 4,
      },
    },
    move: {
      enable: true,
      speed: {
        min: 0.5,
        max: 1.2,
      },
      direction: "none",
      random: true,
      straight: false,
    },
  },
  //   events: {
  //     onHover: {
  //       enable: true,
  //       mode: "bubble",
  //     },
  //   },
  //   modes: {
  //     // bubble: {
  //     //   distance: 200,
  //     //   size: 5,
  //     //   duration: 1.5,
  //     //   opacity: 0.7,
  //     //   color: "#05cd99",
  //     // },
  //     // repulse: {
  //     //   distance: 300,
  //     //   duration: 0.3,
  //     // },
  //     // push: {
  //     //   quantity: 2,
  //     // },
  //     // remove: {
  //     //   quantity: 1,
  //     // },
  //   },
  // },
  background: {
    color: "transparent",
  },
  pauseOnOutsideViewport: true,
  fullScreen: {
    enable: false,
    zIndex: -100,
  },
};
