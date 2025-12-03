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
    image: 'https://images.unsplash.com/photo-1526374965328-7f5ae02e9e51?w=800&h=600&fit=crop',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    category: 'Machine Learning',
    featured: true,
    links: {}
  },
  {
    id: 2,
    title: 'Credit Risk Assessment ML Model',
    description: 'Developed a gradient boosting classifier for credit risk prediction achieving 92% ROC-AUC score. Implemented SHAP values for model interpretability and deployed with containerization.',
    image: 'https://images.unsplash.com/photo-1559163853-04a9cbcf93c8?w=800&h=600&fit=crop',
    technologies: ['Python', 'XGBoost', 'LightGBM', 'SHAP', 'PostgreSQL', 'Docker'],
    category: 'Machine Learning',
    featured: true,
    links: {}
  },
  {
    id: 3,
    title: 'Market Sentiment Analysis Tool',
    description: 'NLP-based sentiment analysis engine that processes financial news and social media to predict market trends. Achieved 80% correlation with market movements using transformer models.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565f472?w=800&h=600&fit=crop',
    technologies: ['Python', 'BERT', 'NLP', 'BeautifulSoup', 'Tweepy', 'FastAPI'],
    category: 'Data Science',
    featured: true,
    links: {}
  },
  {
    id: 4,
    title: 'Portfolio Optimization using Modern Portfolio Theory',
    description: 'Implemented Markowitz efficient frontier algorithm to optimize asset allocation. Backtested strategies across market cycles achieving 15% higher Sharpe ratio than benchmark indices.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
    technologies: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'Jupyter'],
    category: 'Quantitative',
    featured: false,
    links: {}
  },
  {
    id: 5,
    title: 'Algorithmic Trading Strategy Backtest',
    description: 'Built quantitative trading strategies using technical indicators and machine learning signals. Backtested across 10+ years of market data with Monte Carlo simulations for risk assessment.',
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&h=600&fit=crop',
    technologies: ['Python', 'Backtrader', 'Pandas', 'NumPy', 'Scikit-learn', 'TA-Lib'],
    category: 'Quantitative',
    featured: true,
    links: {}
  },
  {
    id: 6,
    title: 'Time Series Forecasting with ARIMA & Prophet',
    description: 'Implemented ARIMA and Facebook Prophet models for financial time series forecasting. Achieved MAPE of 4.2% for cryptocurrency price predictions with automated hyperparameter tuning.',
    image: 'https://images.unsplash.com/photo-1505490026575-cd271d54d00f?w=800&h=600&fit=crop',
    technologies: ['Python', 'Prophet', 'Statsmodels', 'Pandas', 'Plotly', 'Keras'],
    category: 'Machine Learning',
    featured: false,
    links: {}
  },
  {
    id: 7,
    title: 'Immersive 3D Portfolio',
    description: 'A cutting-edge portfolio website featuring WebGL animations, particle systems, and interactive 3D elements built with Three.js and React.',
    image: 'https://images.unsplash.com/photo-1637539003814-7f5ae4d9a3b3?w=800&h=600&fit=crop',
    technologies: ['React', 'Three.js', 'WebGL', 'GSAP', 'Tailwind CSS'],
    category: '3D/WebGL',
    featured: true,
    links: {}
  },
  {
    id: 8,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and advanced analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1563013544-824b1adfea55?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    category: 'Full-Stack',
    featured: true,
    links: {}
  },
  {
    id: 9,
    title: 'AI-Powered Chat App',
    description: 'Real-time messaging application with AI-powered features, voice recognition, and smart reply suggestions.',
    image: 'https://images.unsplash.com/photo-1609042231453-a99fbf1ded91?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Socket.io', 'OpenAI', 'Firebase', 'TensorFlow'],
    category: 'Full-Stack',
    featured: false,
    links: {}
  },
  {
    id: 10,
    title: 'VR Experience Platform',
    description: 'Virtual reality web platform for immersive experiences using WebXR, spatial audio, and haptic feedback.',
    image: 'https://images.unsplash.com/photo-1579033100900-c231541e9b92?w=800&h=600&fit=crop',
    technologies: ['A-Frame', 'WebXR', 'Three.js', 'Web Audio API', 'WebRTC'],
    category: '3D/WebGL',
    featured: true,
    links: {}
  },
  {
    id: 11,
    title: 'Smart Home Dashboard',
    description: 'IoT dashboard for smart home automation with real-time monitoring, scheduling, and energy optimization.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Docker'],
    category: 'Full-Stack',
    featured: false,
    links: {}
  }
];

const categories = ['All', 'Machine Learning', 'Quantitative', 'Data Science', '3D/WebGL', 'Full-Stack'];

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
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <p className="text-white font-semibold text-sm">View Project Details</p>
          </div>
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
            A showcase of my work spanning quantitative finance, machine learning applications,
            data science solutions, and full-stack development projects that demonstrate expertise in financial analytics.
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
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-green-500/50'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-emerald-500/30'
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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Interested in My Work? Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
}
