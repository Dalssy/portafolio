// Selecciona todos los carruseles
document.querySelectorAll('.carousel-auto').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const items = carousel.querySelectorAll('.carousel-item');
  let index = 0;

  function showSlide(n) {
    if (n < 0) index = items.length - 1;
    else if (n >= items.length) index = 0;
    else index = n;

    track.style.transform = `translateX(${-index * 100}%)`;
  }

  // Auto carrusel cada 5 segundos
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);
});
