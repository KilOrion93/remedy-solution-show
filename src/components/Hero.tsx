import React from 'react';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // remove '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
      
        <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
                Production & Post-Production <span className="gradient-text">Audiovisuelle</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Remedy Solution est une société de production belge dédiée au développement et à la post-production d’œuvres audiovisuelles, favorisant les collaborations locales et internationales pour donner vie à vos projets.
            </p>
            <div className="flex justify-center items-center gap-4">
                <a 
                    href="#services" 
                    onClick={(e) => handleScrollClick(e, '#services')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                >
                    Nos Services
                </a>
                <a 
                    href="#contact"
                    onClick={(e) => handleScrollClick(e, '#contact')}
                    className="bg-gray-700/50 hover:bg-gray-600/50 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                >
                    Contactez-nous
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
