import React from 'react';
    import { motion } from 'framer-motion';

    const layers = [
      { nodes: 3, label: 'Input Layer' },
      { nodes: 4, label: 'Hidden Layer' },
      { nodes: 2, label: 'Output Layer' },
    ];

    export default function NeuralNetwork() {
      return (
        <motion.div
          className="relative w-full h-full min-h-[300px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <defs>
              <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#29B954" />
                <stop offset="50%" stopColor="#8A2BE2" />
                <stop offset="100%" stopColor="#FF1493" />
              </linearGradient>
            </defs>
            {layers.map((layer, layerIndex) => {
              const xOffset = (400 / (layers.length + 1)) * (layerIndex + 1);
              return layer.nodes <= 4 && Array.from({ length: layer.nodes }).map((_, nodeIndex) => {
                const yOffset = (300 / (layer.nodes + 1)) * (nodeIndex + 1);
                return (
                  <g key={`${layerIndex}-${nodeIndex}`}>
                    <motion.circle
                      cx={xOffset}
                      cy={yOffset}
                      r="8"
                      fill="url(#nodeGradient)"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: layerIndex * 0.2 + nodeIndex * 0.1,
                      }}
                      whileHover={{ scale: 1.2, filter: 'drop-shadow(0 0 10px rgba(41, 185, 84, 1))' }}
                    >
                      <animate
                        attributeName="opacity"
                        values="0.5;1;0.5"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </motion.circle>
                    {layerIndex < layers.length - 1 && Array.from({ length: layers[layerIndex + 1].nodes }).map((_, nextNodeIndex) => {
                      const nextXOffset = (400 / (layers.length + 1)) * (layerIndex + 2);
                      const nextYOffset = (300 / (layers[layerIndex + 1].nodes + 1)) * (nextNodeIndex + 1);
                      return (
                        <motion.line
                          key={`${layerIndex}-${nodeIndex}-${nextNodeIndex}`}
                          x1={xOffset}
                          y1={yOffset}
                          x2={nextXOffset}
                          y2={nextYOffset}
                          stroke="url(#nodeGradient)"
                          strokeWidth="1"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.2 }}
                          transition={{
                            duration: 1,
                            delay: layerIndex * 0.3 + nodeIndex * 0.1,
                          }}
                          whileHover={{ stroke: 'url(#nodeGradient)', strokeWidth: 2 }}
                        >
                          <animate
                            attributeName="opacity"
                            values="0.1;0.3;0.1"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </motion.line>
                      );
                    })}
                  </g>
                );
              });
            })}
          </svg>
        </motion.div>
      );
    }
