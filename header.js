'strict mode';

const cmd_screen = document.querySelector('#cmd-screen');
const hi = document.querySelector('#hi');

const cls = function (element) {
  for (let x = 0; x <= element.childElementCount; x++) {
    element.removeChild(element.children[x]);
  }
};
autoInputFX(
  '34 std::cout << name << ", a self taught software developer.";',
  rol,
  80,
  false
);
const display_screen = function (e) {
  cmd_screen.style.letterSpacing = '10px';
  cmd_screen.style.fontSize = '2rem';
  cmd_screen.style.color = 'rgb(15, 9, 9)';
  cmd_screen.style.textIndent = '0px';
  hi.style.top = '300px';
  setTimeout(() => {
    cmd_screen.style.opacity = '1';
    cmd_screen.style.fontSize = '2.5rem';
    cmd_screen.style.justifyContent = 'center';
    cmd_screen.textContent = e.target.textContent
      ? e.target.textContent
      : 'Hi!';
    cmd_screen.style.color = 'white';
  }, 250);
};
btn_hi.addEventListener('click', display_screen);
btn_toolbox.addEventListener('click', display_screen);
btn_services.addEventListener('click', display_screen);
btn_hire.addEventListener('click', display_screen);
btn_faq.addEventListener('click', display_screen);
