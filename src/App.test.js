import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import fs from 'fs';
import path from 'path';
beforeEach(() => {
  window.scrollTo = jest.fn();
  window.history.replaceState({}, '', '/');
  document.head.innerHTML = '<meta name="description" content="">';
});
test('contact data is included in the POST and matches the static Netlify form', () => {
  window.history.replaceState({}, '', '/iletisim');
  const { container } = render(<App />);
  const entries = [['Adınız Soyadınız', 'Ayşe Test'], ['E-posta Adresiniz', 'test@example.com'], ['Telefon Numaranız', '05333333333'], ['Mesajınız veya Teklif Talebiniz', 'Araç hakkında bilgi almak istiyorum.']];
  entries.forEach(([label, value]) => fireEvent.change(screen.getByLabelText(label), { target: { value } }));
  const form = container.querySelector('form');
  const data = Object.fromEntries(new FormData(form));
  expect(data).toEqual({ 'form-name': 'IletisimFormu', 'bot-field': '', name: 'Ayşe Test', email: 'test@example.com', phone: '05333333333', message: 'Araç hakkında bilgi almak istiyorum.' });
  expect(form).toHaveAttribute('method', 'POST');
  expect(form).toHaveAttribute('action', '/tesekkurler.html');
  const html = new DOMParser().parseFromString(fs.readFileSync(path.join(process.cwd(), 'public/index.html'), 'utf8'), 'text/html');
  expect(Array.from(html.querySelectorAll('form [name]'), el => el.name).sort()).toEqual(Object.keys(data).sort());
  container.querySelectorAll('a[href^="tel:"]').forEach(link => expect(link).toHaveAttribute('href', 'tel:+905333731113'));
});
test('menu closes on navigation and Escape, and route metadata updates', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Menüyü aç' }));
  fireEvent.click(screen.getByRole('link', { name: 'İLETİŞİM' }));
  expect(screen.getByRole('button', { name: 'Menüyü aç' })).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bize Ulaşın');
  expect(document.title).toBe('İletişim | Aydınlar Otomotiv Erzurum');
  expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  fireEvent.click(screen.getByRole('button', { name: 'Menüyü aç' }));
  fireEvent.keyDown(screen.getByRole('button', { name: 'Menüyü kapat' }), { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Menüyü aç' })).toHaveFocus();
});
test('unknown routes show a usable recovery link', () => {
  window.history.replaceState({}, '', '/olmayan-sayfa');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sayfa bulunamadı');
  fireEvent.click(screen.getByRole('link', { name: 'Ana sayfaya dön' }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Yeni yolculuğunuz');
});
