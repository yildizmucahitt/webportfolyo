import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import type { IconType } from 'react-icons';

interface SocialLink {
  icon: React.FC;
  url: string;
  label: string;
}

const Home: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: () => (
        <span className="w-8 h-8">
          {React.createElement(FaGithub, { size: 32 })}
        </span>
      ),
      url: 'https://github.com/yildizmucahitt',
      label: 'GitHub'
    },
    {
      icon: () => (
        <span className="w-8 h-8">
          {React.createElement(FaLinkedin, { size: 32 })}
        </span>
      ),
      url: 'https://tr.linkedin.com/',
      label: 'LinkedIn'
    },
    {
      icon: () => (
        <span className="w-8 h-8">
          {React.createElement(FaInstagram, { size: 32 })}
        </span>
      ),
      url: 'https://www.instagram.com/',
      label: 'Instagram'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-background-secondary to-background"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-text mb-3 sm:mb-4"
            data-aos="fade-down"
            data-aos-delay="200">
          Mücahit Mehmet Yıldız
        </h1>
        
        <div className="text-lg sm:text-xl md:text-3xl text-primary font-medium mb-6 sm:mb-8"
             data-aos="fade-up"
             data-aos-delay="400">
          <TypeAnimation
            sequence={[
              'Yazılım Geliştirici',
              2000,
              'Problem Çözücü',
              2000,
              'Takım Oyuncusu',
              2000,
            ]}
            style={{ display: 'inline-block' }}
            cursor={true}
            repeat={Infinity}
          />
        </div>

        <p className="text-base sm:text-lg text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0"
           data-aos="fade-up"
           data-aos-delay="600">
          Modern web teknolojileri ile kullanıcı dostu ve yenilikçi çözümler üretiyorum.
        </p>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
             data-aos="fade-up"
             data-aos-delay="800">
          {socialLinks.map(({ icon: Icon, url, label }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0"
             data-aos="fade-up"
             data-aos-delay="1000">
          <Link
            to="/portfolio"
            className="bg-primary text-text px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-medium text-sm sm:text-base"
          >
            Projelerimi Gör
          </Link>
          <Link
            to="/contact"
            className="bg-dark text-text px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-primary transition-colors duration-300 font-medium text-sm sm:text-base"
          >
            İletişime Geç
          </Link>
        </div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full -top-20 -right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full -bottom-20 -left-20 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Home; 