import React from 'react';
import { ProcessStep } from '../types';

const processData: ProcessStep[] = [
    { id: 1, title: 'Consultation', description: 'Nous commençons par une analyse approfondie de votre vision et de vos objectifs pour créer un plan sur mesure.' },
    { id: 2, title: 'Premier Montage', description: 'Nos monteurs élaborent la première version, en se concentrant sur l\'histoire, le rythme et les moments clés.' },
    { id: 3, title: 'Révision & Affinage', description: 'Vous nous faites part de vos commentaires et nous procédons à des révisions précises jusqu\'à ce que le résultat soit parfait.' },
    { id: 4, title: 'Livraison Finale', description: 'Nous livrons la vidéo finale dans les formats souhaités, prête à captiver votre public.' },
];

const Process: React.FC = () => {
    return (
        <section id="process" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Notre <span className="gradient-text">Processus Simple</span></h2>
                    <p className="text-lg text-gray-400">Nous avons optimisé notre flux de travail pour qu'il soit transparent, collaboratif et axé sur l'obtention de résultats exceptionnels.</p>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700/50 -translate-y-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {processData.map((step) => (
                            <div key={step.id} className="relative text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start mb-4">
                                  <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 border-2 border-indigo-500 text-indigo-400 text-2xl font-bold">
                                      {`0${step.id}`}
                                  </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;