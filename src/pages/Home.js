import React from 'react';
import { Link } from 'react-router-dom';
import showroom from './background1.jpg';
import storyPhoto from './background3.jpg';
import { getSahibindenUrl } from '../utils/externalLinks';
import './Home.css';

const services = [
  ['Detaylı ekspertiz', 'Bağımsız ekspertiz merkezlerinde inceleme ve açık raporlama.'],
  ['Güvenli devir', 'Noter ve ruhsat işlemlerinde baştan sona destek.'],
  ['Nakit teklif', 'Aracınız için hızlı ve şeffaf değerlendirme.'],
  ['Türkiye genelinde', 'Yerinde araç alım ve satım hizmeti.'],
];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="container hero-grid">
        <p className="eyebrow hero-eyebrow">AYDINLAR OTOMOTİV · ERZURUM</p>
        <h1>Yeni yolculuğunuz<br /><em className="display-accent">burada başlar.</em></h1>
        <figure className="hero-photo">
          <img src={showroom} alt="Aydınlar Otomotiv showroomunda sergilenen siyah araçlar" width="1200" height="857" fetchPriority="high" />
          <figcaption><span>AYDINLAR SEÇKİSİ</span><span>Her yolculuk, bir seçimle başlar.</span></figcaption>
        </figure>
        <p className="hero-description">İkinci el araç alım ve satımında doğru seçim, şeffaf süreç ve güvenle atılan yeni bir adım.</p>
        <div className="button-row">
          <a className="button button-red" href={getSahibindenUrl()}>Araçları incele</a>
          <a className="button button-outline" href="https://wa.me/905333731113" target="_blank" rel="noopener noreferrer">WhatsApp’tan ulaş</a>
        </div>
        <div className="hero-note"><span className="small-line" aria-hidden="true" /> Sizin için doğru araç. Her adımda yanınızda.</div>
      </div>
    </section>

    <section className="services-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">HER ADIMDA GÜVEN</p>
          <h2>İyi bir araçtan<br /><em className="display-accent">daha fazlası.</em></h2>
        </div>
        <div className="services-grid">
          {services.map(([title, description], index) => <article key={title} className="service">
            <span className="service-number" aria-hidden="true">0{index + 1}</span>
            <h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="home-story container">
      <figure className="story-photo"><img src={storyPhoto} alt="Aydınlar Otomotiv önünde sergilenen iki Porsche" width="1085" height="651" loading="lazy" /></figure>
      <div className="home-story-copy">
        <p className="eyebrow">BİZİ TANIYIN</p>
        <h2>Bir araç alışverişi.<br /><em className="display-accent">Uzun soluklu bir güven.</em></h2>
        <p>Erzurum’da Aydınlar Otomotiv olarak, ihtiyaçlarınıza uygun aracı bulmanız için yanınızdayız. Açık iletişimi ve şeffaf bir alışveriş deneyimini önemsiyoruz.</p>
        <Link className="text-link" to="/hakkimizda">Hikayemizi keşfedin</Link>
      </div>
    </section>
  </>;
}
