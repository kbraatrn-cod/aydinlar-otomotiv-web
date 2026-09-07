// src/components/Header.js

import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const logoImage = `${process.env.PUBLIC_URL}/aydinlar-logo.svg`;

const Header = () => {
    // Mobil menü yönetimi (sadeliği korumak için yine de önemlidir)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuButton = useRef(null);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header dark-theme" onKeyDown={(event) => { if (event.key === "Escape" && isMenuOpen) { closeMenu(); menuButton.current?.focus(); } }}>
            <div className="container header-inner">

                {/* 1. LOGO ALANI (Sadece site adını kullanabiliriz) */}
                <Link to="/" className="site-logo" onClick={closeMenu}>
                   <img
                        src={logoImage}
                        alt="Aydınlar Otomotiv Logo"
                        className="header-logo-img"
                    />

                </Link>

                {/* 3. ANA NAVİGASYON */}
                <nav id="main-navigation" aria-label="Ana menü" className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul><li><NavLink to="/" end onClick={closeMenu}>ANA SAYFA</NavLink></li>
                       <li><NavLink to="/hakkimizda" onClick={closeMenu}>HAKKIMIZDA</NavLink></li>

                        <li><NavLink to="/iletisim" onClick={closeMenu}>İLETİŞİM</NavLink></li>
                    </ul>
                </nav>

                {/* Mobil Hamburger Butonu */}
                <button
                    ref={menuButton} type="button" aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={isMenuOpen} aria-controls="main-navigation" className="menu-toggle"
                    onClick={toggleMenu}>
                    {isMenuOpen ? '×' : '☰'}
                </button>
            </div>
        </header>


    );
};



export default Header;