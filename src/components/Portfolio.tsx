
import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  openModal: (videoUrl: string) => void;
}

const portfolioData: PortfolioItem[] = [
  { id: 1, thumbnailUrl: '/images/gods_sword.png', videoUrl: '', title: "God's Sword", category: 'Film' },
  { id: 2, thumbnailUrl: '/images/nuit_du_destin.jpg', videoUrl: '', title: 'Les Terreurs du Terroir', category: 'Film' },
  { id: 3, thumbnailUrl: '/images/terreur_teroire.jpg', videoUrl: '', title: 'Voyage au Maroc', category: 'Documentaire' },
];

const PlayIcon = () => (
    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5v14l11-7z"></path>
    </svg>
);

const Portfolio: React.FC<PortfolioProps> = ({ openModal }) => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Nos <span className="gradient-text">Projets</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item) => (
                <div 
                    key={item.id} 
                    className={`group relative overflow-hidden rounded-2xl shadow-lg ${item.videoUrl ? 'cursor-pointer' : 'cursor-default'}`} 
                    onClick={() => item.videoUrl && openModal(item.videoUrl)}
                >
                    <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-bold drop-shadow-lg">{item.title}</h3>
                        <p className="text-sm font-semibold text-indigo-300 drop-shadow-md">{item.category}</p>
                    </div>
                    {item.videoUrl && (
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <PlayIcon />
                       </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;