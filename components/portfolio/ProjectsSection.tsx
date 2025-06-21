'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Immersive 3D Portfolio',
    description: 'A cutting-edge portfolio website featuring WebGL animations, particle systems, and interactive 3D elements built with Three.js and React.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    technologies: ['React', 'Three.js', 'WebGL', 'GSAP', 'Tailwind CSS'],
    category: '3D/WebGL',
    featured: true,
    links: {
      live: 'https://portfolio.alexchen.dev',
      github: 'https://github.com/alexchen/3d-portfolio',
      demo: 'https://demo.alexchen.dev'
    }
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and advanced analytics dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    category: 'Full-Stack',
    featured: true,
    links: {
      live: 'https://shop.example.com',
      github: 'https://github.com/alexchen/ecommerce-platform'
    }
  },
  {
    id: 3,
    title: 'AI-Powered Chat App',
    description: 'Real-time messaging application with AI-powered features, voice recognition, and smart reply suggestions.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    technologies: ['React Native', 'Socket.io', 'OpenAI', 'Firebase', 'TensorFlow'],
    category: 'Mobile',
    featured: false,
    links: {
      live: 'https://chatai.example.com',
      github: 'https://github.com/alexchen/ai-chat-app'
    }
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for complex data analysis with real-time updates, custom charts, and export capabilities.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'Data Viz',
    featured: false,
    links: {
      live: 'https://dashboard.example.com',
      github: 'https://github.com/alexchen/data-dashboard'
    }
  },
  {
    id: 5,
    title: 'VR Experience Platform',
    description: 'Virtual reality web platform for immersive experiences using WebXR, spatial audio, and haptic feedback.',
    image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg',
    technologies: ['A-Frame', 'WebXR', 'Three.js', 'Web Audio API', 'WebRTC'],
    category: '3D/WebGL',
    featured: true,
    links: {
      live: 'https://vr.example.com',
      github: 'https://github.com/alexchen/vr-platform',
      demo: 'https://vr-demo.example.com'
    }
  },
  {
    id: 6,
    title: 'Smart Home Dashboard',
    description: 'IoT dashboard for smart home automation with real-time monitoring, scheduling, and energy optimization.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Docker'],
    category: 'IoT',
    featured: false,
    links: {
      live: 'https://smarthome.example.com',
      github: 'https://github.com/alexchen/smart-home-dashboard'
    }
  }
];

const categories = ['All', '3D/WebGL', 'Full-Stack', 'Mobile', 'Data Viz', 'IoT'];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.links.live && (
            <Button
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              onClick={() => window.open(project.links.live, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </Button>
          )}
          {project.links.github && (
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => window.open(project.links.github, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {project.links.demo && (
            <Button
              size="sm"
              className="bg-blue-600/80 hover:bg-blue-700/80 text-white backdrop-blur-sm"
              onClick={() => window.open(project.links.demo, '_blank')}
            >
              <Play className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded-full text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" ref={containerRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning web development, 3D graphics, 
            mobile applications, and creative coding experiments.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/alexchen', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}