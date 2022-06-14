'strict mode';

let rol = document.querySelector('#rol');

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
let RanBorderColor = (ele, speed = '200ms', interval = 200, op = '0') => {
  ele.style.transition = speed;
  function exe() {
    let colorRandom = Math.random() * (240 - 360) + 240;
    ele.style.background = `hsl(${colorRandom}, 100%,10%, ${op})`;
  }
  setInterval(exe, interval);
};

/////////////Inits

