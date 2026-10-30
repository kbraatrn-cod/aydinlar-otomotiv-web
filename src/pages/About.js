import React from 'react';
import { Link } from 'react-router-dom';
import photo from './background3.jpg';
import './About.css';

export default function About() {
  return <div className="about-page">
    <section className="about-intro container">
      <p className="eyebrow">AYDINLAR OTOMOTİV / HAKKIMIZDA</p>
      <div className="about-title-row">
        <h1>Yolun başında da,<br /><em className="display-accent">devamında da yanınızda.</em></h1>
        <p>Erzurum’dan başlayan, güven üzerine kurulan bir otomotiv deneyimi.</p>
      </div>
      <figure className="about-photo">
        <img src={photo} alt="Yan yana sergilenen siyah ve beyaz araçlar" width="1085" height="651" />
        <figcaption>AYDINLAR OTOMOTİV <span>ERZURUM</span></figcaption>
      </figure>
    </section>
    <section className="about-story container">
      <div><p className="eyebrow">BİZİM HİKAYEMİZ</p><h2>Doğru araç.<br />Açık iletişim.<br /><em className="display-accent">İçiniz rahat.</em></h2></div>
      <div className="story-copy">
        <p>Aydınlar Otomotiv olarak ikinci el araç alım ve satımını güvene dayalı bir deneyime dönüştürmek istiyoruz. İhtiyacınızı dinliyor, araç hakkında bilmeniz gerekenleri açıkça paylaşıyoruz.</p>
        <p>Bağımsız ekspertizden noter işlemlerine kadar, kararınızı gönül rahatlığıyla verebilmeniz için sürecin her adımında yanınızdayız.</p>
        <Link className="text-link" to="/iletisim">Tanışalım</Link>
      </div>
    </section>
    <section className="values-section">
      <div className="container values-grid">
        {[
          ['01', 'Şeffaflık', 'Araç geçmişi ve ekspertiz bilgilerini açıkça paylaşırız.'],
          ['02', 'Adil yaklaşım', 'Alıcı ve satıcı için doğru bir değerlendirmeyi önemseriz.'],
          ['03', 'Kalıcı iletişim', 'Alışverişiniz tamamlandıktan sonra da yanınızdayız.'],
        ].map(([number, title, description]) => <article key={number}>
          <span className="value-number" aria-hidden="true">{number}</span>
          <h3>{title}</h3><p>{description}</p>
        </article>)}
      </div>
    </section>
  </div>;
}
