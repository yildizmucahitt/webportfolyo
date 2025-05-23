import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  category: 'web' | 'mobile' | 'desktop';
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'desktop'>('all');

  const projects: Project[] = [
    {
      title: "E-Ticaret Platformu",
      description: "Modern bir e-ticaret platformu. React ve Node.js kullanılarak geliştirildi.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "/project1.jpg",
      projectUrl: "#",
      category: "web"
    },
    {
      title: "Blog Uygulaması",
      description: "Kişisel blog uygulaması. TypeScript ve Next.js ile geliştirildi.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      imageUrl: "/project2.jpg",
      projectUrl: "#",
      category: "web"
    },
    {
      title: "Task Yönetim Sistemi",
      description: "Takım çalışması için task yönetim uygulaması.",
      technologies: ["React", "Firebase", "Material-UI"],
      imageUrl: "/project3.jpg",
      projectUrl: "#",
      category: "desktop"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            className="text-2xl sm:text-3xl font-bold text-text mb-3 sm:mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Projelerim
          </h2>
          <div 
            className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          ></div>
        </div>

        <div 
          className="flex justify-center space-x-4 mb-8 sm:mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[
            { value: 'all', label: 'Tümü' },
            { value: 'web', label: 'Web' },
            { value: 'mobile', label: 'Mobil' },
            { value: 'desktop', label: 'Masaüstü' }
          ].map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value as typeof activeCategory)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-primary text-text'
                  : 'bg-background-secondary text-text-secondary hover:text-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-background-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-text text-background px-6 py-2 rounded-full hover:bg-background hover:text-text transition-colors duration-300"
                  >
                    Projeyi İncele
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-background px-3 py-1 rounded-full text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 