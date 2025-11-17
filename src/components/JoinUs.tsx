import React from 'react';

const JoinUs: React.FC = () => {
    return (
        <section id="joinus" className="py-20 md:py-32 bg-gray-900/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-4">Nous <span className="gradient-text">Rejoindre</span></h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                    Nous sommes toujours à la recherche de nouveaux talents pour rejoindre notre équipe.
                </p>
                {/* This would ideally link to a page with job offers */}
                <a 
                    href="#contact"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                >
                    Voir les offres d'emploi
                </a>
            </div>
        </section>
    );
};

export default JoinUs;
