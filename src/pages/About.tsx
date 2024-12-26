import { Code2, Database, Layout, Server, Sparkles, Workflow } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';

const skills = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building responsive and intuitive user interfaces with React, TypeScript, and modern CSS frameworks.'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Developing robust server-side applications using Node.js, Express, and various databases.'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing and optimizing database schemas, writing efficient queries, and managing data relationships.'
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, tested, and well-documented code following best practices and design patterns.'
  },
  {
    icon: Workflow,
    title: 'DevOps',
    description: 'Setting up CI/CD pipelines, containerization, and cloud infrastructure management.'
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design',
    description: 'Creating beautiful and functional user experiences with attention to detail and accessibility.'
  }
];

const experiences = [
  {
    title: 'Senior Engineer',
    company: 'Graphene AI',
    period: '2024 - Present',
    description: 'Leading development of enterprise applications, mentoring junior developers, and implementing best practices.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Wipro Technologies',
    period: '2021 - 2023',
    description: 'Developed and maintained multiple client projects using React, Node.js, and AWS infrastructure.'
  }
  // {
  //   title: 'Frontend Developer',
  //   company: 'Creative Web Agency',
  //   period: '2017 - 2019',
  //   description: 'Created responsive web applications and implemented pixel-perfect designs for various clients.'
  // }
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle 
          title="About Me"
          subtitle="Passionate developer with expertise in full-stack development and a keen eye for design."
        />

        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Experience</h3>
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title}
                {...experience}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}