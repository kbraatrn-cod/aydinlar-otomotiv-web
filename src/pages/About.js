// src/pages/About.js

import React from 'react';
import './About.css'; 


const About = () => {
    return (
        <div className="about-page">
            
            {/* 1. KURUMSAL GİRİŞ BÖLÜMÜ (Hero benzeri, ama daha kısa) */}
            <section className="about-hero">
                <div className="container">
                    <h2>2. El Otomotivde Güvenilir Adres: Aydınlar Otomotiv</h2>
                </div>
            </section>

            {/* 2. HİKAYE VE MİSYON */}
            <section className="about-story">
                <div className="container story-grid">
                    <div className="text-content">
                        <h2>Hikayemiz</h2>
                        <p>
                            Aydınlar Otomotiv, Erzurum merkezli olarak, ikinci el otomotiv sektöründeki şeffaflık ve güven ihtiyacından doğdu. Yıllar süren tecrübemizle, müşterilerimize sadece araç satmayı değil, aynı zamanda tamamen güvene dayalı bir alım satım deneyimi sunmayı hedefledik. Bizim için her araç, detaylı ekspertizden geçmeli ve her işlem yasal güvence altında olmalıdır.
                        </p>
                        
                        <h2 style={{marginTop: '30px'}}>Misyonumuz</h2>
                        <p>
                            Misyonumuz, sektördeki en şeffaf ve güvenilir ekspertiz süreçlerini uygulayarak, alıcı ve satıcıyı gönül rahatlığıyla bir araya getirmektir. Müşterilerimizin, araç alım satımında hiçbir zaman soru işaretiyle kalmamasını sağlamak, temel prensibimizdir.
                        </p>
                    </div>

                    {/* VİZYON GÖRSELİ */}
                    
                </div>
            </section>
            
            {/* 3. DEĞERLERİMİZ (Vurgulu Kartlar) */}
            <section className="our-values">
                <div className="container">
                    <h2 className="section-title">Temel Değerlerimiz</h2>
                    <div className="values-cards-grid">
                        <div className="value-card">
                            <span>✅</span>
                            <h3>Şeffaflık</h3>
                            <p>Tüm ekspertiz raporlarını ve geçmiş kayıtlarını tam olarak paylaşıyoruz.</p>
                        </div>
                        <div className="value-card">
                            <span>⚖️</span>
                            <h3>Adaletli Fiyatlandırma</h3>
                            <p>Piyasa değerinde adil fiyatlandırma ile herkesin kazanmasını sağlıyoruz.</p>
                        </div>
                        <div className="value-card">
                            <span>🤝</span>
                            <h3>Müşteri Memnuniyeti</h3>
                            <p>Alım satım sonrası süreçlerde dahi müşterilerimizin yanındayız.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;