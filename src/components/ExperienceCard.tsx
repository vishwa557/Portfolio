import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  delay?: number;
}

export default function ExperienceCard({ 
  title, 
  company, 
  period, 
  description,
  delay = 0 
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
        <Calendar className="h-4 w-4" />
        <span>{period}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-blue-600 font-medium mb-2">{company}</p>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}