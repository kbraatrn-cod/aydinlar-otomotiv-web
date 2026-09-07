// src/App.js
// src/App.js dosyasının en üstüne ekleyin
import './App.css';
import ScrollToTop from './component/ScrollToTop';
import PageMetadata from './component/PageMetadata';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      {/* 🟢 Header'ı buraya, Router'ın içine ve Routes'un DIŞINA koyun */}
      <ScrollToTop />
      <PageMetadata />
      <a className="skip-link" href="#main-content">İçeriğe geç</a>
      <Header />

      <main id="main-content" tabIndex={-1}>
        {/* Sayfa içeriği burada Routes içinde değişecek */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/hakkimizda" element={<About />} />
        <Route path="*" element={<section className="container not-found"><h1>Sayfa bulunamadı</h1><p>Aradığınız sayfa mevcut değil.</p><Link to="/">Ana sayfaya dön</Link></section>} />
        </Routes>
      </main>

      <Footer />

    </Router>
  );
}



export default App;