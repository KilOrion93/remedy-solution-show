import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  openModal: (videoUrl: string) => void;
}

const portfolioData: PortfolioItem[] = [
  { id: 1, thumbnailUrl: 'https://picsum.photos/seed/picsum/600/400', videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ?si=aVoQl7Slp8n9wGRb', title: 'Corporate Branding Film', category: 'Corporate' },
  { id: 2, thumbnailUrl: 'https://picsum.photos/seed/picsum/600/400', videoUrl: 'https://www.youtube-nocookie.com/embed/rokGy0huYEA', title: 'Social Media Ad Campaign', category: 'Social Media' },
  { id: 3, thumbnailUrl: 'https://picsum.photos/seed/picsum/600/400', videoUrl: 'https://www.youtube-nocookie.com/embed/fbYv2e-jY5A', title: 'Eleonor & James Wedding', category: 'Wedding' },
  { id: 4, thumbnailUrl: 'https://picsum.photos/seed/picsum/600/400', videoUrl: 'https://www.youtube-nocookie.com/embed/36nIn2Pj_aM', title: 'Tech Review YouTube', category: 'YouTube' },
  { id: 5, thumbnailUrl: 'https://picsum.photos/seed/picsum/600/400', videoUrl: 'https://www.youtube-nocookie.com/embed/eRsGyueVLvQ', title: 'Alpine Drone Reel', category: 'Drone' },
  { id: 6, thumbnailUrl: 'https://picsum.photos/seed/picsum/600/400', videoUrl: 'https://www.youtube-nocookie.com/embed/m3_hKv4pEM4', title: 'Short Film "The Shift"', category: 'Color Grading' },
];

const PlayIcon = () => (
    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.002v3.996a1 1 0 001.555.833l3.49-1.998a1 1 0 000-1.666l-3.49-1.998z" clipRule="evenodd"></path>
    </svg>
);


const Portfolio: React.FC<PortfolioProps> = ({ openModal }) => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Nos <span className="gradient-text">Projets</span></h2>
            <p className="text-lg text-gray-400">Nous sommes fiers de notre travail. Explorez une sélection de projets qui mettent en valeur notre passion pour le storytelling et notre excellence technique.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer" onClick={() => openModal(item.videoUrl)}>
                    <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold drop-shadow-lg">{item.title}</h3>
                        <p className="text-sm font-semibold text-indigo-300 drop-shadow-md">{item.category}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayIcon />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
