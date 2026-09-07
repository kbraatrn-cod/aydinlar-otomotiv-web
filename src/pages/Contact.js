// src/pages/Contact.js

import React from 'react';
import './Contact.css';
// Harita iframe'inin kaynağı için bir değişken tanımlayabiliriz
const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.091772671004!2d41.2291448!3d39.9079963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406d2003c2a1219b%3A0x6b1f2b2c9b2f3d2f!2sErzurum%20Toyota%20Plaza!5e0!3m2!1str!2str!4v1702200000000!5m2!1str!2str"; // Örnek Erzurum konumu (Toyota Plaza karşısı civarı)

const Contact = () => {
    return (
        <div className="contact-page">

            {/* 1. GİRİŞ BÖLÜMÜ */}
            <section className="contact-hero">
                <div className="container">
                    <p className="eyebrow">BİRLİKTE BİR SONRAKİ ADIM</p><h1>Bize Ulaşın</h1>
                    <p>Sorularınız, ekspertiz randevusu veya nakit teklifi talepleriniz için bize yazın veya doğrudan arayın.</p>
                </div>
            </section>

            {/* 2. ANA İLETİŞİM GRİDİ (Form ve Detaylar) */}
            <section className="contact-grid-section">
                <div className="container contact-grid">

                    {/* A. İLETİŞİM FORMU */}
                    <div className="contact-form-container">
                        <h2>Bir mesaj bırakın</h2>
                        <form className="contact-form"
                              name="IletisimFormu" // Formun Netlify'da görünecek ismi
                              method="POST" action="/tesekkurler.html" data-netlify-honeypot="bot-field"
                              data-netlify="true">

                            <input type="hidden" name="form-name" value="IletisimFormu" />
                            <p hidden><label>Bu alanı boş bırakın<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
<label htmlFor="contact-name">Adınız Soyadınız</label><input id="contact-name" name="name" type="text" autoComplete="name" required />
                            <label htmlFor="contact-email">E-posta Adresiniz</label><input id="contact-email" name="email" type="email" autoComplete="email" required />
                            <label htmlFor="contact-phone">Telefon Numaranız</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" required />
                            <label htmlFor="contact-message">Mesajınız veya Teklif Talebiniz</label><textarea id="contact-message" name="message" rows="4" required></textarea>
                            <button type="submit" className="submit-btn">Mesajı Gönder</button>
                        </form>
                    </div>

                    {/* B. İLETİŞİM DETAYLARI VE SAATLER */}
                    <div className="contact-details-box">
                        <div className="detail-item">
                            <h3>Telefon</h3>
                            <p><a href="tel:+905333731113">0533 373 11 13</a></p>
                        </div>
                        <div className="detail-item">
                            <h3>E-posta</h3>
                            <p><a href="mailto:info@aydinlaroto.com">info@aydinlaroto.com</a></p>
                        </div>
                        <div className="detail-item">
                            <h3>Adres</h3>
                            <p>TORTUM YOLU ÜZERİ - TOYOTA PLAZA KARŞISI, Erzurum</p>
                        </div>
                        <div className="detail-item">
                            <h3>Çalışma saatleri</h3>
                            <p>Hafta İçi: 09:00 - 19:30</p>
                            <p>Cumartesi: 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GOOGLE HARİTA GÖMÜLÜ BÖLÜM */}
            <section className="map-section">
                <div className="container">
                    <h2 className="section-title">Konumumuz</h2>
                    <div className="map-embed-container">
                        <iframe
                            src={mapSrc}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Aydınlar Otomotiv Konumu"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;