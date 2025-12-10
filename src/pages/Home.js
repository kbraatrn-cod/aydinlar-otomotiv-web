// src/pages/Home.js (Geliştirilmiş Tam İçerik)

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

// --- Hero Component'iniz (Başlık ve CTA'lar aynı kalabilir) ---
const HeroSection = () => (
    <div className="hero-section">
        {/* ... Hero Section İçeriği ... */}
        <div className="hero-content">
            <h3>Uzman Ekspertiz Onaylı, Güvenle Alıp Satabileceğiniz Adres: Aydınlar Otomotiv Erzurum.</h3>
            <div className="cta-group">
                <div className="cta-group">
                    {/* 💥 SAHİBİNDEN.COM LİNKİ BURAYA EKLENİR 💥 */}
                    <a 
                        href="https://aydinlarotomotiverzurum.sahibinden.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-secondary-btn"
                    >
                        ARAÇLARIMIZI İNCELEYİN
                    </a>
                </div>
            </div>
        </div>
    </div>
);
// --------------------------------------------------------

const Home = () => {
    return (
        <>
            <HeroSection />

            {/* BÖLÜM 1: GÜVEN VURGUSU & EKSPERTİZ ÖZETİ (Önceki Hizmetler yerine) */}
           

<div className="assurance-cards horizontal-scroll-container"> 
    
    {/* 1. KART */}
    <div className="card scroll-item">
        <span className="icon-badge">🔍</span> 
        <h3>Detaylı Ekspertiz</h3>
        <p>Anlaşmalı bağımsız ekspertiz merkezleri tarafından yapılan detaylı inceleme ve raporlama.</p>
    </div>

    {/* 2. KART */}
    <div className="card scroll-item">
        <span className="icon-badge">📄</span>
        <h3>Yasal Güvence</h3>
        <p>Tüm alım satım süreçleri, noter ve ruhsat işlemleri uzman ekibimiz tarafından sorunsuz tamamlanır.</p>
    </div>

    {/* 3. KART */}
    <div className="card scroll-item">
        <span className="icon-badge">💸</span>
        <h3>Anında Nakit Teklifi</h3>
        <p>Aracınıza piyasa değerinde hızlı ve şeffaf nakit teklifi ile hemen ödeme imkanı.</p>
    </div>
    
    {/* Yatay kaydırma etkisini göstermek için 4. kartı ekleyelim */}
    <div className="card scroll-item">
        <span className="icon-badge">📍</span>
        <h3>Yerinde Alım</h3>
        <p>Tüm Türkiye'den güvenli bir şekilde yerinde alım satım.</p>
    </div>

</div>
        </>
    );
};


export default Home;