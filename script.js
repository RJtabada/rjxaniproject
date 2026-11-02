document.getElementById('year').textContent = new Date().getFullYear();

// If a Google Drive thumbnail can't load, show a clean placeholder instead of a broken image
document.querySelectorAll('.thumb img').forEach(function (img) {
  img.addEventListener('error', function () {
    img.style.display = 'none';
    var t = img.closest('.card').querySelector('h3').textContent;
    img.parentElement.innerHTML = '<div style="height:100%;display:grid;place-items:center;color:#777;letter-spacing:.3em;font-size:.9rem">' + t.toUpperCase() + '</div>';
  });
});
