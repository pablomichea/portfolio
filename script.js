'strict mode';

const body = document.querySelector('body');
const intro = document.querySelector('#intro');
const bioHeader = document.querySelector('bio-header');

window.addEventListener('mousemove', function () {
  if (window.innerWidth > 730) {
    body.style.overflow = 'auto';
  } else {
    body.style.overflow = 'hidden';
  }
});

//Left buttons

const btn_hi = document.querySelector('#btn-hi');
const btn_toolbox = document.querySelector('#btn-toolbox');
const btn_services = document.querySelector('#btn-services');
const btn_hire = document.querySelector('#btn-hire');
const btn_faq = document.querySelector('#btn-faq');
