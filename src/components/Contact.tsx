import React from 'react';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle form submission
        alert("Merci pour votre message ! Nous vous recontacterons bientôt.");
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-900/50 relative overflow-hidden">
             <div className="absolute top-0 right-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl -z-10"></div>
             <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Une proposition de projet <span className="gradient-text">ou une autre demande ?</span></h2>
                    <p className="text-lg text-gray-400">Discutons de votre projet. Remplissez le formulaire ci-dessous ou envoyez-nous un e-mail, et nous vous contacterons pour planifier un rdv.</p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                            <input type="text" name="name" id="name" required className="w-full bg-gray-900/70 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Adresse e-mail</label>
                            <input type="email" name="email" id="email" required className="w-full bg-gray-900/70 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Parlez-nous de votre projet</label>
                            <textarea name="message" id="message" rows={5} required className="w-full bg-gray-900/70 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105 duration-300">
                            Envoyer votre demande
                        </button>
                    </form>

                    <div className="mt-16 text-center text-gray-300">
                        <h3 className="text-2xl font-bold mb-6 gradient-text">Contact direct</h3>
                        <a href="mailto:hello@remedysolution.be" className="inline-flex items-center text-lg bg-gray-800/50 py-3 px-6 rounded-lg hover:text-white hover:bg-gray-700/50 transition-colors duration-300 border border-gray-700">
                            <MailIcon />
                            hello@remedysolution.be
                        </a>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
                                <LocationIcon />
                                <h4 className="text-xl font-semibold mb-2 text-white">Office</h4>
                                <p className="text-gray-400">68 Boulevard du Souverain Boîte 3<br />1170 Watermael-Boitsfort</p>
                            </div>
                            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
                                <LocationIcon />
                                <h4 className="text-xl font-semibold mb-2 text-white">Post-Production</h4>
                                <p className="text-gray-400">95 rue de Gosson<br />4101 Seraing</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
