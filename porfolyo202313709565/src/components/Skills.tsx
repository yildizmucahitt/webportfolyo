import React from 'react';
import { FaCode, FaCogs, FaPython, FaDatabase, FaPaintBrush } from 'react-icons/fa';

interface Skill {
  title: string;
  description: string[];
  icon: React.FC;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      title: "Web Geliştirme",
      description: [
        "Modern web teknolojileri kullanarak kullanıcı dostu, hızlı ve güvenilir web uygulamaları geliştirebilirim.",
        "Hem frontend hem backend tarafında C# ve Python ile çözümler sunarım."
      ],
      icon: () => React.createElement(FaCode, { size: 40 })
    },
    {
      title: "C# Programlama",
      description: [
        "C# dilinde masaüstü ve web tabanlı uygulamalar geliştirme konusunda deneyimliyim.",
        "ASP.NET framework ile sağlam ve ölçeklenebilir web projeleri oluşturabilirim."
      ],
      icon: () => React.createElement(FaCogs, { size: 40 })
    },
    {
      title: "Python Programlama",
      description: [
        "Python kullanarak otomasyon, veri analizi ve backend geliştirme işleri yapabilirim.",
        "Django veya Flask gibi frameworklerle web uygulamaları geliştirme tecrübem var."
      ],
      icon: () => React.createElement(FaPython, { size: 40 })
    },
    {
      title: "Veritabanı Yönetimi",
      description: [
        "SQL tabanlı veritabanları (MySQL, MSSQL) ile veri modelleme, sorgulama ve optimizasyon yapabilirim.",
        "Veritabanı tasarımı ve yönetimi konusunda deneyim sahibiyim."
      ],
      icon: () => React.createElement(FaDatabase, { size: 40 })
    },
    {
      title: "Grafik Tasarım",
      description: [
        "Temel grafik tasarım becerilerine sahibim; logo, sosyal medya görselleri ve basit dijital tasarımlar oluşturabilirim.",
        "Adobe Photoshop ve Canva gibi araçlarla çalışırım."
      ],
      icon: () => React.createElement(FaPaintBrush, { size: 40 })
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            className="text-2xl sm:text-3xl font-bold text-text mb-3 sm:mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Neler Yapabilirim?
          </h2>
          <div 
            className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-background-secondary rounded-lg p-6 sm:p-8 hover:transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary mb-4">
                  <skill.icon />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-text mb-4">
                  {skill.title}
                </h3>
                <div className="space-y-3">
                  {skill.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-text-secondary text-sm sm:text-base">
                      {desc}
                    </p>
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

export default Skills; 