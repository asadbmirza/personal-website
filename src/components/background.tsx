import { useTheme } from '@mui/material';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
    const theme = useTheme();

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: theme.palette.primary.main },
        fpsLimit: 30,
        particles: {
          number: { value: 40 },
          size: { value: 5 },
          move: { enable: true, speed: 0.5 },
          color: { value: '#ffffff' },
          opacity: { value: 0.3 },
        },
      }}
    />
  );
}
