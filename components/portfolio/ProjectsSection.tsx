'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';
// Removed UI Button; use native button

const projects = [
  {
    id: 1,
    title: 'Credit Risk Assessment ML Model',
    description: 'Developed a gradient boosting classifier for credit risk prediction achieving 92% ROC-AUC score. Implemented SHAP values for model interpretability and deployed with containerization.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
    technologies: ['Python', 'XGBoost', 'SHAP', 'PostgreSQL', 'Docker'],
    category: 'Machine Learning',
    featured: true,
    links: {
      github: 'https://github.com/gireesh2003/credit-risk-model'
    }
  },
  {
    id: 2,
    title: 'Stock Price Prediction System',
    description: 'Built LSTM neural network for time-series forecasting of stock prices using technical indicators and market microstructure features. Backtested on 10+ years of data.',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'AWS'],
    category: 'Machine Learning',
    featured: true,
    links: {
      github: 'https://github.com/gireesh2003/stock-prediction'
    }
  },
  {
    id: 3,
    title: 'Portfolio Optimization Algorithm',
    description: 'Implemented Markowitz mean-variance optimization and Black-Litterman model for dynamic portfolio allocation with risk constraints.',
    image: 'https://images.pexels.com/photos/7314783/pexels-photo-7314783.jpeg',
    technologies: ['Python', 'SciPy', 'NumPy', 'PostgreSQL'],
    category: 'Quantitative',
    featured: false,
    links: {
      github: 'https://github.com/gireesh2003/portfolio-optimization'
    }
  },
  {
    id: 4,
    title: 'Market Anomaly Detection',
    description: 'Statistical analysis framework for identifying market anomalies using Z-score tests, Mahalanobis distance, and isolation forests on high-dimensional market data.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    technologies: ['Python', 'scikit-learn', 'SciPy', 'Jupyter'],
    category: 'Data Science',
    featured: false,
    links: {
      github: 'https://github.com/gireesh2003/market-anomaly-detection'
    }
  },
  {
    id: 5,
    title: 'Algorithmic Trading Bot',
    description: 'Developed a systematic trading strategy backtester with live paper trading capabilities. Integrated multiple technical analysis indicators and risk management rules.',
    image: 'https://images.pexels.com/photos/3621881/pexels-photo-3621881.jpeg',
    technologies: ['Python', 'Pandas', 'MongoDB', 'WebSocket', 'Docker'],
    category: 'Quantitative',
    featured: true,
    links: {
      github: 'https://github.com/gireesh2003/algo-trading-bot'
    }
  },
  {
    id: 6,
    title: 'Feature Engineering Pipeline',
    description: 'Automated feature engineering pipeline for financial data including lag features, technical indicators, and cross-sectional statistics with proper train-test splitting.',
    image: 'https://images.pexels.com/photos/5280097/pexels-photo-5280097.jpeg',
    technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn'],
    category: 'Data Science',
    featured: false,
    links: {
      github: 'https://github.com/gireesh2003/feature-engineering-pipeline'
    }
  }
];

const categories = ['All', 'Machine Learning', 'Quantitative', 'Data Science'];

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
            <button
              className="px-3 py-2 rounded bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              onClick={() => window.open(project.links.live, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </button>
          )}
          {project.links.github && (
            <button
              className="px-3 py-2 rounded border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => window.open(project.links.github, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </button>
          )}
          {project.links.demo && (
            <button
              className="px-3 py-2 rounded bg-blue-600/80 hover:bg-blue-700/80 text-white backdrop-blur-sm"
              onClick={() => window.open(project.links.demo, '_blank')}
            >
              <Play className="w-4 h-4 mr-2" />
              Demo
            </button>
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
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning quantitative finance, machine learning
            applications, data science solutions, and full-stack development projects that
            demonstrate expertise in financial analytics.
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
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
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
          <button
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/gireesh2003', '_blank')}
          >
            <Github className="w-5 h-5 mr-2 inline" />
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
