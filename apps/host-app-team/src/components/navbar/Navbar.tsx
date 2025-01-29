import React, { useState, useEffect } from 'react';
import { authService } from '../../services/auth.service';
import './Navbar.css'; 

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logout = () => {
        authService.logout();
    };

    return (
        <div className={`${isScrolled ? 'fixed' : 'block'} bg-[#1094ab] p-4 w-full z-[999999] border-b border-white border-b-1`}>
            <nav className="navbar container mx-auto flex justify-between items-center">
                <div className="navbar-logo text-2xl text-white">
                    <a href="/" className='flex gap-4 items-center justify-center'>
                        <img src="/logo_usp.svg" alt="Logo" width="90" />
                        <h1>Portal de Serviços</h1>
                    </a>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="/">Home</a></li>
                    <li className="navbar-item">
                        {!authService.isLogged ? (
                            <a href="login">Login</a>
                        ) : (
                            <a href="#" onClick={logout}>Logout</a>
                        )}
                    </li>
                </ul>

                {authService.isLogged && (
                    <ul className="main-navbar-menu flex gap-4 items-center">
                        <li className="relative">
                            <button id="hamburger-menu" className="focus:outline-none" onClick={toggleMenu}>
                                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                            {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>}
                            <ul className={`${isMenuOpen ? 'animate-slide-in' : 'hidden'} fixed right-0 top-0 h-screen w-60 bg-white rounded-md rounded-tr-none shadow-lg z-50 transition-transform transform ${isMenuOpen ? '' : 'translate-x-full'} shadow-lg`}>
                                <li className="flex justify-end p-2">
                                    <button className="focus:outline-none" onClick={toggleMenu}>
                                        <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </li>
                                <li className="subnavbar-item"><a href="/protected/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dashboard</a></li>
                                <li className="subnavbar-item"><a href="/protected/jupiter" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Júpiter</a></li>
                                <li className="subnavbar-item"><a href="/protected/janus" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Janus</a></li>
                            </ul>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
