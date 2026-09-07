import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const siteUrl = 'https://aydinlarotomotiverzurum.com';
const pages = {
  '/': ['Aydınlar Otomotiv Erzurum | İkinci El Araç Alım Satım', 'Erzurum Aydınlar Otomotiv: ikinci el araç alım satım, bağımsız ekspertiz ve nakit teklif. Araç ilanlarımızı inceleyin, bizimle iletişime geçin.'],
  '/hakkimizda': ['Hakkımızda | Aydınlar Otomotiv Erzurum', 'Aydınlar Otomotiv hakkında bilgi alın. Erzurum merkezli ikinci el araç alım satımında şeffaflık, adil fiyatlandırma ve müşteri memnuniyeti.'],
  '/iletisim': ['İletişim | Aydınlar Otomotiv Erzurum', 'Aydınlar Otomotiv iletişim bilgileri, çalışma saatleri ve adresi. Araç alım satım ve teklif talepleriniz için bize ulaşın.']
};
export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pages[pathname] || ['Sayfa bulunamadı | Aydınlar Otomotiv', 'Aradığınız sayfa mevcut değil.'];
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);

    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [key, metaValue] = attribute;
        element.setAttribute(key, metaValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    setMeta('meta[property="og:title"]', ['property', 'og:title'], title);
    setMeta('meta[property="og:description"]', ['property', 'og:description'], description);
    setMeta('meta[property="og:url"]', ['property', 'og:url'], canonicalUrl);
    setMeta('meta[property="og:type"]', ['property', 'og:type'], 'website');
    setMeta('meta[property="og:locale"]', ['property', 'og:locale'], 'tr_TR');

    let structuredData = document.head.querySelector('#local-business-schema');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'local-business-schema';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AutoDealer',
      name: 'Aydınlar Otomotiv',
      url: siteUrl,
      telephone: '+90 533 373 11 13',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tortum Yolu Üzeri, Toyota Plaza Karşısı',
        addressLocality: 'Erzurum',
        addressCountry: 'TR'
      },
      sameAs: [
        'https://www.instagram.com/aydinlarotomotiverzurum/',
        'https://aydinlarotomotiverzurum.sahibinden.com/'
      ]
    });
  }, [pathname]);
  return null;
}
