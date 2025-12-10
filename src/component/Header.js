// src/components/Header.js

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logoImage from './aydınlarlogo.png';

const Header = () => {
    // Mobil menü yönetimi (sadeliği korumak için yine de önemlidir)
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header dark-theme"> 
            <div className="container header-inner">
                
                {/* 1. LOGO ALANI (Sadece site adını kullanabiliriz) */}
                <Link to="/" className="site-logo">
                   <img 
                        src={logoImage} 
                        alt="Aydınlar Otomotiv Logo" 
                        className="header-logo-img" 
                    />
               
                </Link>

                {/* 3. ANA NAVİGASYON */}
                <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                       <li><NavLink to="/hakkimizda" onClick={toggleMenu}>HAKKIMIZDA</NavLink></li>

                        <li><NavLink to="/iletisim" onClick={toggleMenu}>İLETİŞİM</NavLink></li>
                    </ul>
                </nav>
                
                {/* Mobil Hamburger Butonu */}
                <button 
                    className="menu-toggle" 
                    onClick={toggleMenu}>
                    {isMenuOpen ? 'x' : '='}
                </button>
            </div>
        </header>

                
    );
};



export default Header;