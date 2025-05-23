import React from 'react';

interface Education {
  title: string;
  description: string;
}

const About: React.FC = () => {
  const education: Education[] = [
    {
      title: 'Bilgisayar Mühendisliği',
      description: 'Balıkesir Üniversitesi Öğrencisi'
    },
    {
      title: 'Bilgisayar Programcılığı',
      description: 'Sakarya Uygulamalı Bilimler Üniversitesi Mezunu'
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
            Ben Kimim?
          </h2>
          <div 
            className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div 
            className="space-y-4 sm:space-y-6"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-primary">
              Merhaba, Ben Mücahit Mehmet Yıldız
            </h3>
            <div className="space-y-3 sm:space-y-4 text-text-secondary text-sm sm:text-base">
              <p>
                bilgisayar mühendisliği öğrencisiyim. Yazılım geliştirme alanına duyduğum ilgi sayesinde sadece teorik bilgiyle yetinmeyip, pratikte de kendimi sürekli geliştirmeyi hedefliyorum.
              </p>
              <p>
                Algoritmalar, veritabanları ve modern web teknolojileri üzerine yoğunlaşıyor; yazılım projelerinde çözüm odaklı, sürdürülebilir ve ölçeklenebilir yapılar kurmaya özen gösteriyorum.
              </p>
              <p>
                Takım çalışmasına yatkın, sorumluluk sahibi ve sürekli öğrenmeye açık bir mühendis adayı olarak, hem bireysel projelerde hem de ekip çalışmalarında etkili sonuçlar üretmeyi amaçlıyorum.
              </p>
              <p>
                Kodun sadece çalışan bir sistem değil, aynı zamanda iyi bir mühendislik ve iletişim örneği olduğuna inanıyorum.
              </p>
            </div>
          </div>

          <div 
            className="grid grid-cols-1 gap-4 sm:gap-6"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-background-secondary p-6 sm:p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  {edu.title}
                </div>
                <div className="text-sm sm:text-base text-text-secondary font-medium">
                  {edu.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 