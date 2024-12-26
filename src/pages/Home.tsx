import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Vishwa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/vishwa557"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/vishwachandra-l-b3a70317a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:vishwa.2959@gmail.com"
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Developer"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}