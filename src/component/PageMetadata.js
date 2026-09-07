import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const pages = {
  '/': ['Aydınlar Otomotiv Erzurum | İkinci El Araç Alım Satım', 'Erzurum Aydınlar Otomotiv: ikinci el araç alım satım, bağımsız ekspertiz ve nakit teklif. Araç ilanlarımızı inceleyin, bizimle iletişime geçin.'],
  '/hakkimizda': ['Hakkımızda | Aydınlar Otomotiv Erzurum', 'Aydınlar Otomotiv hakkında bilgi alın. Erzurum merkezli ikinci el araç alım satımında şeffaflık, adil fiyatlandırma ve müşteri memnuniyeti.'],
  '/iletisim': ['İletişim | Aydınlar Otomotiv Erzurum', 'Aydınlar Otomotiv iletişim bilgileri, çalışma saatleri ve adresi. Araç alım satım ve teklif talepleriniz için bize ulaşın.']
};
export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pages[pathname] || ['Sayfa bulunamadı | Aydınlar Otomotiv', 'Aradığınız sayfa mevcut değil.'];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [pathname]);
  return null;
}
