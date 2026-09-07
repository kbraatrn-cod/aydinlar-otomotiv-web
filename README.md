# Aydınlar Otomotiv Erzurum

React ile hazırlanmış üç sayfalı otomotiv tanıtım sitesi. Araç ilanları Sahibinden mağazasına yönlendirilir.

## Yerel geliştirme

- Bağımlılıklar: npm ci
- Geliştirme: npm start
- Üretim: npm run build
- Testler: npm test -- --watchAll=false --runInBand

## Yayın ve iletişim formu

Netlify için derleme komutu npm run build, yayın klasörü build olmalıdır. public/_redirects, React sayfa yollarını index.html dosyasına yönlendirir.

Netlify panelinde form algılamasını etkinleştirin ve yeniden yayınlayın. public/index.html içindeki gizli form ile Contact.js alan adları aynı kalmalıdır. Başarılı gönderim /tesekkurler.html sayfasına yönlenir. Yerel geliştirme sunucusu form mesajlarını işlemez. Başka bir barındırma hizmetinde form için ayrıca sunucu entegrasyonu gerekir.

Yayından sonra form algılamasını, bildirim alıcısını ve test gönderiminin Netlify paneline ulaştığını doğrulayın. Form kurulumu: https://docs.netlify.com/manage/forms/setup/

## İşletme bilgilerinin doğrulanması

Telefon bağlantıları +905333731113 biçimindedir. Harita mevcut örnek konumu kullanır; yayın öncesinde işletmenin kesin harita işaretini, e-posta adresini ve çalışma saatlerini işletme sahibiyle doğrulayın.

Test yapılandırması: CRA içindeki Jest sürümü için React Router paketinin CommonJS girişleri moduleNameMapper ile eşlenmiştir.

## Vektör logo

public/aydinlar-logo.svg koyu zeminler, public/aydinlar-logo-dark.svg açık zeminler içindir. Amblem ve yazı çizgilerden oluşur; font yüklenmesine gerek yoktur. Fotoğraftaki logodan yeniden çizilmiştir, orijinal kurumsal vektör dosyası değildir. Kaynak PNG dosyaları korunmuştur.
