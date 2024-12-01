import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Github, 
  ExternalLink, 
  Cpu, 
  Database, 
  Layers, 
  Brain, 
  Server, 
  Briefcase 
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    title: "BookStore Management System",
    description: "A comprehensive bookstore management application implementing advanced DBMS concepts, data structures, and object-oriented programming principles.",
    technologies: ["C++", "SQL", "MySQL", "DBMS", "Data Structures", "OOPs"],
    githubLink: "https://github.com/vishalbansal28/LibraTech",
    icon: Server
  },
  {
    title: "REST API with Django",
    description: "Developed a robust REST API using Django Rest Framework with JWT authentication, demonstrating backend development and API design skills.",
    technologies: ["Python", "Django", "Django Rest Framework", "JWT", "SQL", "SQLite"],
    githubLink: "https://github.com/vishalbansal28/REST-API-using-django-rest-framework",
    icon: Code
  },
  {
    title: "Business Intelligence with Deep Learning & NLP",
    description: "Advanced machine learning project leveraging deep learning and natural language processing techniques for business intelligence insights.",
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "NLP", "Streamlit"],
    githubLink: "https://github.com/vishalbansal28/Business-Intelligence-Using-Deep-Learning-and-NLP",
    icon: Database
  },
  {
    title: "Social Networking App",
    description: "A data structures-based social networking application implementing advanced graph theory and optimization techniques.",
    technologies: ["C++", "Data Structures", "Algorithms", "Graph Theory"],
    githubLink: "https://github.com/vishalbansal28/SocialNetX",
    icon: Briefcase
  },
  {
    title: "Heart Disease Prediction",
    description: "Machine learning project for heart disease prediction using various ML models and comprehensive data analysis techniques.",
    technologies: ["Python", "pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    githubLink: "https://github.com/vishalbansal28/Heart-Disease-Prediction-using-ML",
    icon: Server
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative min-h-screen bg-spotify-darker py-24 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spotify-darker via-purple-900/30 to-spotify-green/10 opacity-80 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Cpu className="w-10 h-10 text-spotify-green mr-3" />
            <h2 className="text-4xl font-bold text-white font-consolas">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-purple-300 font-consolas max-w-3xl mx-auto">
            Innovative solutions showcasing backend expertise and AI capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-spotify-green/50 to-purple-600/50 rounded-2xl opacity-50 group-hover:opacity-100 transition duration-300 blur-lg"></div>
              
              <div className="relative bg-spotify-light/30 backdrop-blur-sm rounded-2xl p-6 border border-spotify-green/20 shadow-2xl h-full flex flex-col">
                {/* Project Icon */}
                <div className="mb-4 flex items-center">
                  <project.icon className="w-10 h-10 text-spotify-green mr-4" />
                  <h3 className="text-2xl font-bold text-white font-consolas">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-purple-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-spotify-green/10 text-spotify-green px-3 py-1 rounded-full text-sm font-consolas"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-spotify-green transition duration-300"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-spotify-green transition duration-300"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
