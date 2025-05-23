import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/yildizmucahitt',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/kullaniciadi',
      label: 'LinkedIn'
    },
    {
      icon: FaInstagram,
      url: 'https://instagram.com/kullaniciadi',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="bg-primary py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map(({ icon: Icon, url, label }, index) => {
              const IconComponent = Icon as React.ComponentType<{ className: string }>;
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label={label}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Mücahit Mehmet Yıldız. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 