import { useState } from 'react';

// Fix: Added `name` to the component's props to align with its usage.
const FileInput = ({ label, id, name, onChange, fileName }: { label: string, id: string, name: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, fileName: string }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
        <label htmlFor={id} className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-lg transition-colors duration-300 w-full flex items-center justify-between border border-gray-600">
            <span className="truncate pr-2">{fileName || 'Choisir un fichier...'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
        </label>
        {/* Fix: Used the `name` prop for the input's name attribute. */}
        <input id={id} name={name} type="file" className="sr-only" onChange={onChange} />
    </div>
);

const LocationCard = ({ title, addressLine1, addressLine2 }: { title: string, addressLine1: string, addressLine2: string }) => (
    <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{addressLine1}</p>
        <p className="text-gray-400">{addressLine2}</p>
    </div>
);


const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [files, setFiles] = useState({
        scenario: '',
        intention: '',
        financing: '',
        planning: '',
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files: inputFiles } = e.target;
        if (inputFiles && inputFiles.length > 0) {
            setFiles(prev => ({ ...prev, [name]: inputFiles[0].name }));
        } else {
            setFiles(prev => ({ ...prev, [name]: ''}));
        }
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        // IMPORTANT: Replace with your own Web3Forms Access Key.
        // You can get a free key from https://web3forms.com/
        const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", ACCESS_KEY);
        formData.append("subject", `New Project Submission from ${formData.get('name')}`);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                (e.currentTarget as HTMLFormElement).reset();
                setFiles({
                    scenario: '',
                    intention: '',
                    financing: '',
                    planning: '',
                });
            } else {
                console.error("Error from server:", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };


    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-900/50 relative overflow-hidden">
             <div className="absolute top-0 right-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl -z-10"></div>
             <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-4"><span className="gradient-text">Soumettre un projet</span></h2>
                    <p className="text-lg text-gray-400">
                        Vous souhaitez nous soumettre un projet ? Remplissez le formulaire ci-dessous.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 md:p-12 rounded-2xl border border-gray-700/50">
                    {status === 'success' ? (
                         <div className="text-center py-10">
                             <h3 className="text-2xl font-bold text-white mb-4">Merci !</h3>
                             <p className="text-gray-300 text-lg">Votre projet a bien été soumis. Notre équipe vous recontactera bientôt.</p>
                         </div>
                    ) : status === 'error' ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl font-bold text-red-500 mb-4">Erreur d'envoi</h3>
                            <p className="text-gray-300 text-lg mb-6">Désolé, une erreur s'est produite. Veuillez réessayer plus tard.</p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 duration-300"
                            >
                                Réessayer
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom & Prénom</label>
                                    <input type="text" name="name" id="name" required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Adresse Email</label>
                                    <input type="email" name="email" id="email" required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" />
                                </div>
                            </div>

                            <FileInput label="Scénario" id="scenario" name="scenario" onChange={handleFileChange} fileName={files.scenario} />
                            <FileInput label="Note d’intention" id="intention" name="intention" onChange={handleFileChange} fileName={files.intention} />
                            <FileInput label="Plan de financement et devis prévisionnel" id="financing" name="financing" onChange={handleFileChange} fileName={files.financing} />
                            <FileInput label="Planning de production" id="planning" name="planning" onChange={handleFileChange} fileName={files.planning} />

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Vous êtes auteur, scénariste ou réalisateur ? N’hésitez pas à nous laisser un message.
                                </label>
                                <textarea id="message" name="message" rows={4} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"></textarea>
                            </div>

                            <div className="text-center pt-4">
                                <button type="submit" disabled={status === 'sending'} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 duration-300 disabled:bg-indigo-800 disabled:cursor-not-allowed">
                                    {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le projet'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact direct</h3>
                    <a href="mailto:hello@remedysolution.be" className="inline-flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 rounded-lg px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>hello@remedysolution.be</span>
                    </a>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <LocationCard title="Office" addressLine1="68 Boulevard du Souverain Boîte 3" addressLine2="1170 Watermael-Boitsfort" />
                        <LocationCard title="Post-Production" addressLine1="95 rue de Gosson" addressLine2="4101 Seraing" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;