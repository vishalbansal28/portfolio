import React from 'react';
import { motion } from 'framer-motion';

export default function Waveform() {
  return (
    <div className="flex items-center gap-0.5 h-3">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-0.5 h-full bg-spotify-green"
          animate={{
            scaleY: [0.4, 1, 0.4],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
