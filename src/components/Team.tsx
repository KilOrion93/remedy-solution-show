import React from 'react';

const teamMembers = [
  { name: 'Karim Chafi', role: 'Fondateur & Producteur', imageUrl: 'https://picsum.photos/seed/team1/400/400' },
  { name: 'Joseph Jonathan', role: 'Développement et Partenariat', imageUrl: 'https://picsum.photos/seed/team3/400/400' },
  { name: 'Olivier Silvente', role: 'Direction de Post-Production', imageUrl: 'https://picsum.photos/seed/team2/400/400' },
  { name: 'Fred Sultan', role: 'Producteur', imageUrl: 'https://picsum.photos/seed/team4/400/400' },
  { name: 'Fernand Garcia', role: 'Superviseur VFX', imageUrl: 'https://picsum.photos/seed/team5/400/400' },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Notre <span className="gradient-text">Équipe</span></h2>
          <p className="text-lg text-gray-400">Rencontrez les professionnels passionnés qui donnent vie à vos projets.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center w-48">
              <img src={member.imageUrl} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-gray-700 object-cover" />
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-indigo-300 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;