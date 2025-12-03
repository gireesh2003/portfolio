'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Removed three.js/drei and custom Button; use native elements

// Animated particle field
// Removed 3D background and floating shapes for a simpler, deployable hero

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900"
    >
      {/* Animated gradient background - Data Science theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-emerald-900/30 animate-pulse" />

      {/* Additional animated gradient layers */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        style={{ y, opacity }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full text-sm font-medium text-green-300 border border-green-500/30 backdrop-blur-sm">
            Aspiring Quant & Data Analyst
          </span>
        </motion.div>
        
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Gireesh
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            {' '}Pandya
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Transforming financial markets through advanced data analysis and machine learning.
          <br />
          Expertise in quantitative analysis, statistical modeling, and algorithmic trading strategies.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50"
            onClick={() => scrollToSection('#projects')}
          >
            Explore My Work
          </button>
          <button
            className="border-2 border-emerald-400/50 text-white hover:bg-emerald-600/20 hover:border-emerald-400 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('#contact')}
          >
            Let's Connect
          </button>
        </motion.div>
        
        <motion.div
          className="mt-16 flex justify-center space-x-12 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            <span>Quantitative</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            <span>Machine Learning</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-full"></div>
            <span>Data Science</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
