// src/components/ScrollToTop.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // React Router'dan mevcut URL yolunu al
    const { pathname } = useLocation(); 

    // pathname değiştiğinde (yani sayfa değiştiğinde) çalışır
    useEffect(() => {
        // Pencereyi en üste kaydır
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Görsel bir çıktı vermez
};

export default ScrollToTop;