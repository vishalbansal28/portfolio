import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Server, Database } from 'lucide-react';

const experiences = [
  {
    company: "ShopOut",
    title: "Software Backend Intern",
    duration: "June 2024 - Current",
    description: "Developed a comprehensive video transcription, summarization, and translation pipeline using Google Cloud Speech-to-Text and Bhashini API. Structured video metadata with MongoDB, implemented Sentence-BERT and ChromaDB for data retrieval. Integrated Pinecone for vector search and designed Django REST Framework endpoints to handle user queries efficiently.",
    technologies: ["Python", "Django", "MongoDB", "Google Cloud", "Bhashini API", "Pinecone", "Sentence-BERT"]
  },
  {
    company: "ZuAI",
    title: "Software Backend Intern",
    duration: "Apr 2024 - June 2024",
    description: "Contributed to the Discord Chat Summarizer tool, accelerating content creation by 60% through RAG and vector embedding. Developed data scraping and preprocessing solutions using Python. Collaborated with cross-functional teams to understand project requirements and document technical processes.",
    technologies: ["Python", "RAG", "Vector Embedding", "Data Scraping", "Discord API"]
  }
];

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative min-h-screen bg-spotify-darker py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spotify-darker via-purple-900/50 to-spotify-green/10 opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-10 h-10 text-spotify-green mr-3" />
            <h2 className="text-4xl font-bold text-white font-consolas">
              Professional Experience
            </h2>
          </div>
          <p className="text-xl text-purple-300 font-consolas">
            Transforming ideas into robust, scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-spotify-light/30 backdrop-blur-sm rounded-xl p-6 border border-spotify-green/20 shadow-lg hover:border-spotify-green transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-spotify-green mb-1 font-consolas">
                    {exp.title}
                  </h3>
                  <p className="text-white text-lg font-consolas">
                    {exp.company}
                  </p>
                </div>
                <span className="text-purple-300 text-sm font-consolas">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4 font-consolas">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-spotify-green/10 text-spotify-green px-2 py-1 rounded-full text-xs font-consolas"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
