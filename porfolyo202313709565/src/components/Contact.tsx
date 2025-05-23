import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface ContactInfo {
  icon: React.FC;
  title: string;
  details: React.ReactNode[];
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo: ContactInfo[] = [
    {
      icon: () => (
        <span className="w-6 h-6 text-primary">
          {React.createElement(FaMapMarkerAlt, { size: 24 })}
        </span>
      ),
      title: 'Adres',
      details: ['İstanbul, Türkiye']
    },
    {
      icon: () => (
        <span className="w-6 h-6 text-primary">
          {React.createElement(FaPhone, { size: 24 })}
        </span>
      ),
      title: 'Telefon',
      details: [
        <a
          href="tel:0537712606"
          className="hover:text-primary transition-colors duration-300"
        >
          0 537 712 60 60
        </a>
      ]
    },
    {
      icon: () => (
        <span className="w-6 h-6 text-primary">
          {React.createElement(FaEnvelope, { size: 24 })}
        </span>
      ),
      title: 'E-posta',
      details: [
        <a
          href="mailto:1mucahityildizz@gmail.com"
          className="hover:text-primary transition-colors duration-300"
        >
          1mucahityildizz@gmail.com
        </a>
      ]
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            className="text-2xl sm:text-3xl font-bold text-text mb-3 sm:mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            İletişime Geç
          </h2>
          <div 
            className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-background-secondary p-4 sm:p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
            >
              <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/10 mb-3 sm:mb-4">
                <info.icon />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-text mb-2">{info.title}</h3>
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-sm sm:text-base text-text-secondary">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div 
          className="max-w-2xl mx-auto bg-background-secondary rounded-lg p-4 sm:p-8"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-1 sm:mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-background border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1 sm:mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-background border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text text-sm sm:text-base"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-1 sm:mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-3 sm:px-4 py-2 bg-background border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text text-sm sm:text-base"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-text py-2.5 sm:py-3 px-6 rounded-full hover:bg-secondary transition-colors duration-300 font-medium text-sm sm:text-base"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 