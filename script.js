'strict mode';

let body = document.querySelector('body');

window.addEventListener('mousemove', function () {
  if (window.innerWidth > 730) {
    body.style.overflow = 'auto';
  } else {
    body.style.overflow = 'hidden';
  }
});
