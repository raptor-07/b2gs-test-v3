import type { ISourceOptions } from "@tsparticles/engine";

export const nasaConfig: ISourceOptions = {
  style: {
    filter: 'blur(0px)',
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true
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
        min: 0.3,
        max: 0.8,
      },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    size: {
      value: {
        min: 0.8,
        max: 2.5,
      },
    },
    move: {
      enable: true,
      speed: {
        min: 0.3,
        max: 1,
      },
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      onClick: {
        enable: true,
        mode: "repulse",
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
    detectRetina: true,
    fullScreen: {
      enable: false,
      zIndex: 0
    },
};
