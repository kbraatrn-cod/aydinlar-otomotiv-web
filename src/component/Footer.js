// src/components/Footer.js

import React from 'react';
import './Footer.css'; 
import logoFooter from './footerlogo.png'; // Logoyu kontrol et

const Footer = () => {
    
    // 💥 GÜNCELLENMESİ GEREKEN LİNK VE NUMARALARINIZ 💥
    const telefonNo = "0533 373 11 13"; // Görseldeki numara
    const whatsappLink = "https://wa.me/905333731113"; // WhatsApp linkinizi güncelleyin
    const instagramLink = "https://instagram.com/aydinlarotokulup"; // Instagram linkinizi güncelleyin
    const sahibindenLink = "https://aydinlarotomotiverzurum.sahibinden.com/vasita?sorting=storeShowcase";
    return (
        <footer className="main-footer">
            <div className="container footer-content-grid">
                
                {/* SÜTUN 1: MARKA VE KISA İLETİŞİM */}
                <div className="footer-col brand-info">
                    <img src={logoFooter} alt="Aydınlar Otomotiv Logo" className="footer-logo" />
                    
                    {/* Slogan veya kısa açıklama eklenirse güzel durur */}
                    <p className="slogan">Uzman Ekspertiz Onaylı, Güvenle Alıp Satabileceğiniz Adres.</p>

                    <h4 className="contact-heading">Bize Ulaşın</h4>
                    
                    {/* Telefon Numarası: Telefon numarasının üstte ve daha belirgin olması için */}
                    <p className="footer-tel-number">
                        📞 <a href={`tel:+90${telefonNo.replace(/\s/g, '')}`}>{telefonNo}</a>
                    </p>
                    
                    
                    {/* SOSYAL MEDYA LİNKLERİ */}
                    <div className="social-links-footer">
                        
                        {/* WhatsApp */}
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                            <i className="fab fa-whatsapp"></i> 
                        </a>
                        
                        {/* Instagram */}
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        
                        {/* Sahibinden.com */}
                        <a href={sahibindenLink} target="_blank" rel="noopener noreferrer" className="social-icon sahibinden">
                            <span style={{ fontWeight: 'bold' }}>S</span> 
                        </a>
                    </div>
                </div>
                
                {/* SÜTUN 3: ÇALIŞMA SAATLERİ VE ADRES */}
                <div className="footer-col address-hours">
                    <h4>Adres & Saatler</h4>
                    <p>📍 Adres: TORTUM YOLU ÜZERİ - TOYOTA PLAZA KARŞISI</p>
                    <p style={{marginTop: '20px'}}>**Çalışma Saatleri**</p>
                    <p>Hafta İçi: 09:00 - 19:30</p>
                    <p>Cumartesi: 09:00 - 18:00</p>
                    <p>Pazar: Kapalı</p>
                </div>
            </div>

            {/* COPYRIGHT BÖLÜMÜ */}
            <div className="footer-copyright-bar">
                <div className="container">
                    © {new Date().getFullYear()} Aydınlar Otomotiv. Tüm Hakları Saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;