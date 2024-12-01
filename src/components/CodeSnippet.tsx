import React from 'react';
import { motion } from 'framer-motion';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code } from 'lucide-react';

SyntaxHighlighter.registerLanguage('python', python);

const neuralNetworkCode = `from django.http import JsonResponse
import tensorflow as tf

# Load the neural network model (because, obviously, I can do that in my sleep)
model = tf.keras.models.load_model('neural_network_model')  # It's not like I'm Tony Stark or anything... oh wait.

def predict(request):
    data = [1.0, 2.0, 3.0]  # Yeah, this is the future of AI. Just trust me.
    prediction = model.predict([data])  # I didn't just build a machine to guess… I built a machine to *predict*.
    return JsonResponse({
        'prediction': prediction.tolist(),
        'note': 'You're welcome. I'm basically saving the world one prediction at a time.'
    })`;

export default function CodeSnippet() {
  return (
    <div className="bg-spotify-darker py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Code className="w-10 h-10 text-spotify-green mr-3" />
            <h2 className="text-3xl font-bold text-white font-consolas">
              Neural Network Prediction
            </h2>
          </div>
          <p className="text-xl text-purple-300 font-consolas">
            A glimpse into intelligent predictive systems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-spotify-light/30 rounded-xl border border-spotify-green/20 overflow-hidden"
        >
          <SyntaxHighlighter
            language="python"
            style={oneDark}
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
          >
            {neuralNetworkCode}
          </SyntaxHighlighter>
        </motion.div>
      </div>
    </div>
  );
}
