
import React from 'react';

const Logo = () => (
    <div className="flex items-center space-x-3">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="logoGradient" x1="0" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F46E5"/>
                    <stop offset="1" stopColor="#EC4899"/>
                </linearGradient>
            </defs>
            <path d="M5 5H15C18.3137 5 21 7.68629 21 11C21 14.3137 18.3137 17 15 17H9L15 11" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 5L5 19" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 5V8" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="flex flex-col leading-tight">
            <span className="text-lg font-black gradient-text tracking-wide">REMEDY</span>
            <span className="text-lg font-black gradient-text tracking-wide">SOLUTION</span>
        </div>
    </div>
);


const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1); // remove '#'
        
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
             // For href="#" to scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 py-4 px-4 md:px-8 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1 flex justify-start">
                    <a href="#" aria-label="Homepage" onClick={(e) => handleNavClick(e, '#')}>
                       <Logo />
                    </a>
                </div>
                
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium cursor-pointer"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex-1 flex justify-end">
                    {/* Empty div for spacing, ensures nav is centered */}
                </div>
            </div>
        </header>
    );
};

export default Header;
