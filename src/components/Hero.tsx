import React from 'react';
import { motion } from 'framer-motion';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('python', python);

const neuralNetworkCode = `from django.http import JsonResponse
import tensorflow as tf

# Load the neural network model (because, obviously, I can do that in my sleep)
model = tf.keras.models.load_model('neural_network_model')  # It's not like I'm Tony Stark or anything... oh wait.

def predict(request):
    # 🚀 Yeah, this is the future of AI. Just trust me.
    data = [1.0, 2.0, 3.0]  
    
    # 🔮 I didn't just build a machine to guess… I built a machine to *predict*.
    prediction = model.predict([data])  
    
    return JsonResponse({
        'prediction': prediction.tolist(),
        'note': 'You're welcome. I'm basically saving the world one prediction at a time.'
    })`

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-spotify-darker overflow-hidden pt-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spotify-darker via-purple-900/50 to-spotify-green/10 opacity-80 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Animated Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white font-consolas">
            <span className="text-spotify-green">Vishal Bansal</span>
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-2 flex justify-center"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-spotify-green/20 rounded-lg px-4 py-2 shadow-lg">
              <p className="text-lg text-white tracking-widest uppercase font-bold font-consolas">
                <span className="bg-gradient-to-r from-spotify-green to-purple-500 text-transparent bg-clip-text font-bold">
                  NIT Bhopal Graduated 2024
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-2xl text-purple-300 font-consolas">
            Backend Developer | AI/ML Engineer
          </p>
          <p className="text-xl text-purple-400 mt-4 max-w-2xl mx-auto font-consolas tracking-wide relative">
            <span className="bg-gradient-to-r from-spotify-green to-purple-500 text-transparent bg-clip-text font-bold">
              Crafting intelligent systems and scalable architectures that push the boundaries of technology
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-spotify-green to-purple-500 opacity-20 blur-lg -z-10"></span>
          </p>
        </motion.div>

        {/* Neural Network Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 bg-spotify-light/30 rounded-xl border border-spotify-green/20 overflow-hidden"
        >
          <SyntaxHighlighter
            language="python"
            style={{
              ...oneDark,
              'comment': {
                color: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #FDCB6E)',
                fontStyle: 'italic',
                fontWeight: 'bold',
                textShadow: '0 0 5px rgba(255,107,107,0.3)',
                backgroundImage: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #FDCB6E)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }
            }}
            customStyle={{
              background: 'transparent',
              padding: '1.5rem',
              margin: 0,
              fontSize: '0.9rem',
              lineHeight: '1.5',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
            className="font-consolas"
            wrapLines={true}
            showLineNumbers={false}
            lineProps={(lineNumber) => {
              let style = {};
              if (
                lineNumber === 7 || // First highlighted comment
                lineNumber === 10    // Second highlighted comment
              ) {
                style = {
                  style: {
                    display: 'block',
                    backgroundColor: 'rgba(41, 185, 84, 0.2)', // Spotify green with opacity
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                  },
                };
              }
              return style;
            }}
          >
            {neuralNetworkCode}
          </SyntaxHighlighter>
        </motion.div>
      </div>
    </section>
  );
}
