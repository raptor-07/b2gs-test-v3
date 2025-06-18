"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { nasaConfig } from "./particles-config";
import type { Container, Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = async (container?: Container): Promise<void> => {
    // Container loaded, you can use it for additional setup if needed
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 z-0 pointer-events-none"
      particlesLoaded={particlesLoaded}
      options={nasaConfig}
    />
  );
}
