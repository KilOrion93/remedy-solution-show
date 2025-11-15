import React from 'react';

const SocialIcon: React.FC<{ href: string, path: string, label: string }> = ({ href, path, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label={label}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d={path} />
        </svg>
    </a>
);

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    
    const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        alert(`Merci de vous être abonné avec ${email} !`);
        e.currentTarget.reset();
    };

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto py-12 px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Restez informé de nos derniers projets et actualités.</p>
                        <form onSubmit={handleNewsletterSubmit} className="flex">
                            <input 
                                type="email"
                                name="email"
                                placeholder="Votre adresse e-mail"
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded-l-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-r-lg transition-colors">
                                S'abonner
                            </button>
                        </form>
                    </div>
                    <div className="md:col-span-2 flex flex-col md:items-end justify-between">
                         <div className="flex space-x-6 mb-8 md:mb-0">
                            <SocialIcon href="https://instagram.com" label="Instagram" path="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                            <SocialIcon href="https://linkedin.com" label="LinkedIn" path="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 13 11.1V10.29H10.13V18.5H13V13.57C13 12.8 13.69 12.1 14.43 12.1A1.4 1.4 0 0 1 15.83 13.5V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.29H5.5V18.5H8.27Z" />
                        </div>
                         <div className="text-center md:text-right">
                            <p className="text-gray-400">&copy; {year} Remedy Solution. All Rights Reserved.</p>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">PRODUCTION POST-PRODUCTION • BRUXELLES • LIEGE</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
