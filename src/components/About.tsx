import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
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
            <Target className="w-10 h-10 text-spotify-green mr-3" />
            <h2 className="text-4xl font-bold text-white font-consolas">
              About Me
            </h2>
          </div>
          <p className="text-xl text-purple-300 font-consolas max-w-3xl mx-auto">
            A passionate backend developer and AI enthusiast, dedicated to creating intelligent, scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-spotify-light/30 backdrop-blur-sm rounded-xl p-6 border border-spotify-green/20 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-spotify-green mr-4" />
              <h3 className="text-2xl font-bold text-spotify-green font-consolas">
                Professional Journey
              </h3>
            </div>
            
            <p className="text-gray-300 mb-4 font-consolas leading-relaxed">
              I recently graduated from NIT Bhopal in 2024, specializing in Backend Development and Machine Learning. 
              My passion lies in building scalable, intelligent systems that solve real-world challenges. 
              I have extensive experience with Python, Django, FastAPI, and AI/ML technologies.
            </p>
            
            <div className="bg-spotify-light/30 backdrop-blur-sm border border-spotify-green/20 rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold text-spotify-green mb-2 font-consolas">
                Notable Achievements
              </h3>
              <ul className="text-gray-300 list-disc list-inside font-consolas">
                <li>
                  <span className="text-purple-300">CodeKaze by Code Studio</span>: Ranked AIR 331 out of 1.6 Lakh+ students
                </li>
                <li>
                  <span className="text-purple-300">Codathon by NIT Bhopal</span>: Ranked 431st All over India out of 6700+ students
                </li>
              </ul>
            </div>

            <p className="text-gray-300 font-consolas leading-relaxed">
              Beyond technical skills, I'm passionate about continuous learning, problem-solving, and creating innovative solutions 
              that make a meaningful impact in the tech world.</p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-spotify-light/30 backdrop-blur-sm rounded-xl p-6 border border-spotify-green/20 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-spotify-green mr-4" />
              <h3 className="text-2xl font-bold text-spotify-green font-consolas">
                Technical Skills
              </h3>
            </div>
            
            <div className="bg-spotify-light/30 backdrop-blur-sm border border-spotify-green/20 rounded-lg p-4">
              <h3 className="text-xl font-bold text-spotify-green mb-3 font-consolas">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", 
                  "C++", 
                  "Django", 
                  "FastAPI", 
                  "SQL", 
                  "MySQL", 
                  "MongoDB", 
                  "REST API", 
                  "Git",
                  "DBMS", 
                  "Data Structures",
                  "Algorithms", 
                  "Machine Learning",
                  "Object-Oriented Programming",
                  "Google Firebase",
                  "JWT",
                  "TensorFlow",
                  "Scikit-learn"
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-spotify-green/10 text-spotify-green px-3 py-1 rounded-full text-sm font-consolas"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="bg-spotify-light/30 backdrop-blur-sm border border-spotify-green/20 rounded-lg p-4 mt-4">
              <h3 className="text-xl font-bold text-spotify-green mb-3 font-consolas">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Collaborative Teamwork",
                  "Cross-Functional Communication",
                  "Adaptive Learning",
                  "Technical Documentation",
                  "Innovative Thinking",
                  "Agile Methodology",
                  "Project Management",
                  "Continuous Improvement",
                  "Strategic Planning"
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm font-consolas"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
