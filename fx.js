'strict mode';

let rol = document.querySelector('#rol');
let nombre = document.querySelector('#name');
let li = document.querySelectorAll('li');
let a = document.querySelectorAll('a');

/////////////Title auto input
let autoInputFX = (txt, ele, speed, repeat) => {
  let count = 0;
  let char = '';
  const intervalo = setInterval(exe, speed);
  function exe() {
    if (!ele.value) {
      if (count < txt.length) {
        char += txt[count];
        ele.textContent = `${char}|`;
      }
      if (count >= txt.length) {
        count = 0;
        char = '';
      } else {
        count++;
      }
      if (!repeat && count >= txt.length) {
        clearInterval(intervalo);
        ele.textContent = txt;
      }
    } else {
      count = 0;
      char = '';
    }
  }
  return '';
};

/////////////Random Border Color
let RanBorderColor = (ele, speed, interval, op) => {
  ele.style.transition = speed;
  function exe() {
    let colorRandom = Math.random() * (240 - 360) + 240;
    ele.style.border = `3px solid hsl(${colorRandom}, 100%,30%, ${op})`;
  }
  setInterval(exe, interval);
};

/////////////Inits

autoInputFX(
  '34 std::cout << name << ", a self taught software developer.";     ',
  rol,
  80,
  false
);
