document.getElementById('year').textContent = new Date().getFullYear();

// Each work image tries, in order:
// 1) your own file in /images (poster.jpg, then .png, .webp)  2) Google Drive image link  3) Drive thumbnail  4) text placeholder
document.querySelectorAll('.thumb img').forEach(function (img) {
  var id = img.dataset.id, base = img.dataset.local;
  var chain = [
    base + '.png',
    base + '.webp',
    'https://lh3.googleusercontent.com/d/' + id + '=w800',
    'https://drive.google.com/thumbnail?id=' + id + '&sz=w800'
  ];
  var step = 0;
  img.referrerPolicy = 'no-referrer';
  img.addEventListener('error', function () {
    if (step < chain.length) { img.src = chain[step++]; return; }
    var t = img.closest('.card').querySelector('h3').textContent;
    img.parentElement.innerHTML = '<div style="height:100%;display:grid;place-items:center;color:#777;letter-spacing:.3em;font-size:.9rem">' + t.toUpperCase() + '</div>';
  });
});

// Portrait: Drive image -> Drive thumbnail -> images/hero.jpg -> built-in copy
(function () {
  var img = document.getElementById('heroImg');
  if (!img) return;
  var id = img.dataset.id;
  var chain = [
    'https://drive.google.com/thumbnail?id=' + id + '&sz=w1200',
    'images/hero.jpg',
    window.HERO_FALLBACK
  ];
  var step = 0;
  img.referrerPolicy = 'no-referrer';
  img.addEventListener('error', function () {
    if (step < chain.length) img.src = chain[step++];
  });
})();
