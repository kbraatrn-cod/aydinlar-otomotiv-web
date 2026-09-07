export const sahibindenWebUrl = 'https://aydinlarotomotiverzurum.sahibinden.com/vasita';

const sahibindenAppUrl = 'sahibinden://https://aydinlarotomotiverzurum.sahibinden.com/';

export function getSahibindenUrl() {
  if (typeof navigator === 'undefined') return sahibindenWebUrl;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? sahibindenAppUrl
    : sahibindenWebUrl;
}
