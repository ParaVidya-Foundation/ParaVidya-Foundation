'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Card from './index';
import { projects } from './data';

export default function StackedCards() {
  const container = useRef<HTMLDivElement>(null);

  // Observe scroll progress of the full document instead of just container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main
      ref={container}
      className="relative flex flex-col items-center justify-start"
      style={{
        height: `${projects.length * 100}vh`,
        marginTop: '10vh',
        paddingBottom: '100vh', // ensures smooth exit scroll
      }}
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}