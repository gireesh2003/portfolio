'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science and Engineering (Cyber-Physical Systems)',
    school: 'Vellore Institute of Technology, Chennai',
    period: '2021 - 2025',
    description: 'Focused on cyber-physical systems, real-time computing, AI, and system integration.',
    achievements: [
      'Final year project: GAN–Random Forest based Network Intrusion Detection System',
      'Interned at TSDPL'
    ]
  },
  {
    id: 2,
    degree: 'Class XII – CBSE',
    school: 'Greatmenn International School, Sagar',
    period: '2020 - 2021',
    description: 'Completed 12th grade with specialization in PCM + CS.',
    achievements: [
      'Scored 78% in Board Exams',
    ]
  },
  {
    id: 3,
    degree: 'Class X – CBSE',
    school: 'Greatmenn International School, Sagar',
    period: '2017 - 2018',
    description: 'Completed secondary education with a focus on STEM.',
    achievements: [
      'Scored 79% ',
      'House captain and tech club leader',
      
    ]
  }
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="education" ref={containerRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My academic background and the learning experiences that shaped my skills and passion for technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Education Cards */}
          <div className="space-y-12 ml-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-4 border-black flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <span className="text-green-400 font-semibold">{edu.school}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-400 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h5 className="text-white font-semibold mb-3">Achievements:</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
