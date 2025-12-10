// src/App.js
// src/App.js dosyasının en üstüne ekleyin
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
      <Header /> 
      
      <main>
        {/* Sayfa içeriği burada Routes içinde değişecek */}
        <Routes> 
          
          <Route path="/" element={<Home />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/hakkimizda" element={<About />} />
        </Routes>
      </main>
  
      <Footer /> 
      
    </Router>
  );
}



export default App;