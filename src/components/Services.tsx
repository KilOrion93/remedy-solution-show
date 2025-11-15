import React from 'react';

const Section: React.FC<{title: string; children: React.ReactNode;}> = ({ title, children }) => (
    <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center"><span className="gradient-text">{title}</span></h3>
        <div className="text-lg text-gray-400 space-y-4 text-left md:text-center">
            {children}
        </div>
    </div>
);

const CheckIcon = () => (
    <svg className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);


const Services: React.FC = () => {
  const postProdServices = [
      'Montage', 'Étalonnage', 'Compositing', '3D', 'Motion Design', 'Retouche numérique', 'IA générative'
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Présentation de <span className="gradient-text">Remedy Solution</span></h2>
        </div>

        <Section title="Notre Mission">
            <p>
                Remedy Solution est une société de production belge dédiée au développement et à la post-production d’œuvres audiovisuelles. Nous mettons notre savoir-faire au service des créateurs et des producteurs, en favorisant des collaborations locales et internationales.
            </p>
            <p>
                Grâce au Tax Shelter belge, nous utilisons un levier stratégique de coproduction, permettant d'attirer des partenaires étrangers tout en valorisant les talents et les ressources du secteur audiovisuel en Belgique.
            </p>
        </Section>

        <Section title="Équipe de production">
            <p>
                Nos équipes de production assurent une gestion rigoureuse et stratégique des dépenses éligibles en Belgique. Fortes d'une expertise approfondie du cadre légal et fiscal, elles garantissent la conformité, la transparence et l'optimisation des ressources afin de soutenir la performance financière de chaque production.
            </p>
        </Section>

        <Section title="Post-production & VFX">
           <p>
                Le département post-production et VFX de Remedy Solution offre une chaîne complète de services, de la conformation à la finalisation.
           </p>
           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-lg mx-auto">
                {postProdServices.map(service => (
                    <div key={service} className="flex items-center">
                        <CheckIcon />
                        <span className="text-white font-medium">{service}</span>
                    </div>
                ))}
            </div>
        </Section>
      </div>
    </section>
  );
};

export default Services;
