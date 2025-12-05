'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';
// Removed UI Button; use native button

const projects = [
  {
    id: 1,
    title: 'Stock Price Prediction using LSTM Neural Networks',
    description: 'Deep learning model utilizing LSTM architecture to predict stock price movements with 85%+ accuracy. Trained on 5 years of historical data with feature engineering and hyperparameter optimization.',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    category: 'Machine Learning',
    featured: true,
    links: {
      live: 'https://stock-price-prediction-rust.vercel.app',
      github: 'https://github.com'
    }
  },
  {
    id: 2,
    title: 'Credit Risk Assessment ML Model',
    description: 'Developed a gradient boosting classifier for credit risk prediction achieving 92% ROC-AUC score. Implemented SHAP values for model interpretability and deployed with containerization.',
    image: 'https://images.pexels.com/photos/3874587/pexels-photo-3874587.jpeg',
    technologies: ['Python', 'XGBoost', 'LightGBM', 'SHAP', 'PostgreSQL', 'Docker'],
    category: 'Machine Learning',
    featured: true,
    links: {
      live: 'https://credit-risk-b32o.vercel.app',
      github: 'https://github.com'
    }
  },
  {
    id: 3,
    title: 'Market Sentiment Analysis Tool',
    description: 'NLP-based sentiment analysis engine that processes financial news and social media to predict market trends. Achieved 80% correlation with market movements using transformer models.',
    image: 'https://images.pexels.com/photos/8369249/pexels-photo-8369249.jpeg',
    technologies: ['Python', 'BERT', 'NLP', 'BeautifulSoup', 'Tweepy', 'FastAPI'],
    category: 'Data Science',
    featured: false,
    links: {
      live: 'https://sentiment-ai-kappa.vercel.app',
      github: 'https://github.com'
    }
  },
  {
    id: 4,
    title: 'Portfolio Optimization using Modern Portfolio Theory',
    description: 'Implemented Markowitz efficient frontier algorithm to optimize asset allocation. Backtested strategies across market cycles achieving 15% higher Sharpe ratio than benchmark indices.',
    image: 'https://images.pexels.com/photos/1092874/pexels-photo-1092874.jpeg',
    technologies: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'Jupyter'],
    category: 'Quantitative',
    featured: false,
    links: {
      live: 'https://portfolio-optimiser.vercel.app',
      github: 'https://github.com'
    }
  },
  {
    id: 5,
    title: 'Algorithmic Trading Strategy Backtest',
    description: 'Built quantitative trading strategies using technical indicators and machine learning signals. Backtested across 10+ years of market data with Monte Carlo simulations for risk assessment.',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg',
    technologies: ['Python', 'Backtrader', 'Pandas', 'NumPy', 'Scikit-learn', 'TA-Lib'],
    category: 'Quantitative',
    featured: true,
    links: {
      github: 'https://github.com'
    }
  },
  {
    id: 6,
    title: 'Time Series Forecasting with ARIMA & Prophet',
    description: 'Implemented ARIMA and Facebook Prophet models for financial time series forecasting. Achieved MAPE of 4.2% for cryptocurrency price predictions with automated hyperparameter tuning.',
    image: 'https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg',
    technologies: ['Python', 'Prophet', 'Statsmodels', 'Pandas', 'Plotly', 'Keras'],
    category: 'Machine Learning',
    featured: false,
    links: {
      github: 'https://github.com'
    }
  },
  {
    id: 7,
    title: 'Social Media Web App',
    description: 'Full-stack social networking platform with real-time messaging, user authentication, and dynamic feed management. Integrated with modern web technologies for seamless user experience and scalable architecture.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    category: 'Full-Stack',
    featured: false,
    links: {
      live: 'social-media-web-app-k8bf.vercel.app',
      github: 'https://github.com'
    }
  },
  {
    id: 8,
    title: 'VR Experience Platform',
    description: 'Immersive virtual reality web platform enabling interactive 3D experiences with WebXR support. Features spatial audio, haptic feedback integration, and real-time multiplayer capabilities for engaging VR environments.',
    image: 'https://images.pexels.com/photos/7974561/pexels-photo-7974561.jpeg',
    technologies: ['Three.js', 'WebXR', 'A-Frame', 'Web Audio API', 'React Three Fiber', 'GSAP'],
    category: '3D/WebGL',
    featured: false,
    links: {
      live: 'vr-platform-two.vercel.app',
      github: 'https://github.com'
    }
  }
];

const categories = ['All', 'Machine Learning', 'Data Science', 'Quantitative', 'Full-Stack', '3D/WebGL'];

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
              className="px-3 py-2 rounded bg-emerald-600/80 hover:bg-emerald-700/80 text-white backdrop-blur-sm"
              onClick={() => window.open(project.links.demo, '_blank')}
            >
              <Play className="w-4 h-4 mr-2" />
              Demo
            </button>
          )}
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 rounded-full text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
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
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
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
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
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
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
