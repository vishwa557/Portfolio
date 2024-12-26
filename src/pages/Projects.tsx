import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with cart functionality and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using state-of-the-art models.',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my featured projects. Each one is crafted with attention to detail and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}