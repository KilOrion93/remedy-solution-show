import React from 'react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "Remedy Solution didn't justedit our video; they found its soul. The final product exceeded all our expectations and has been a game-changer for our marketing.",
    name: 'Sarah Johnson',
    company: 'Marketing Director, Innovate Co.',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    quote: "The team's creativity and attention to detail are second to none. They transformed hours of footage into a powerful, emotional story. Absolutely brilliant work!",
    name: 'Michael Chen',
    company: 'Founder, SparkUp',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    quote: "Working with Remedy Solution was a breeze. Professional, responsive, and incredibly talented. They understood our vision perfectly and delivered on time.",
    name: 'Jessica Rodriguez',
    company: 'Events Manager, Aura Events',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 flex flex-col h-full">
        <p className="text-gray-300 text-lg italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-400"/>
            <div>
                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                <p className="text-indigo-300 font-medium">{testimonial.company}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Nos <span className="gradient-text">partenaires</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
