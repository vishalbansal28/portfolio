import React from 'react';
    import { motion } from 'framer-motion';
    import { Github, Linkedin, Phone, Mail } from 'lucide-react';

    const socialLinks = [
      {
        icon: Github,
        href: "https://github.com/yourusername",
        color: "text-white hover:text-spotify-green"
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/yourusername",
        color: "text-white hover:text-spotify-green"
      },
      {
        icon: Phone,
        href: "tel:+911234567890",
        color: "text-white hover:text-spotify-green"
      },
      {
        icon: Mail,
        href: "mailto:vishal.bansal@example.com",
        color: "text-white hover:text-spotify-green"
      }
    ];

    export default function Footer() {
      return (
        <footer 
          id="contact" 
          className="relative bg-transparent py-12 overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-spotify-darker via-purple-900/50 to-spotify-green/10 opacity-80 backdrop-blur-sm" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-spotify-green/20 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white font-consolas mb-4">
                  Get In Touch
                </h2>
                <p className="text-purple-300 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, opportunities, 
                  or collaborations. Feel free to reach out!
                </p>
              </div>

              <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      ${link.color} 
                      p-3 rounded-full bg-spotify-green/10 
                      transition-all duration-300 
                      hover:bg-spotify-green/20
                    `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-400 font-consolas">
                  © 2024 Vishal Bansal. All Rights Reserved.
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      );
    }
