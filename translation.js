'strict mode';

let bios = {
  english: {
    p1: `I used to do web development as a hobby. Nowadays, I'm doing front and back-end. I'm a fan of CSS and JS. I like to create animations and creative code in general.`,
    p2: `I started coding when I was about 14 years old, when Macromedia was an awesome company and Flash MX 6 was a must in the web. Actionscript (a JS-like language) was very powerful. I could create all sort of animations and FX's, with the use of some simple math. That's how I spent all my time as a kid.`,
    p3: `In 2020, I started updating my skills and leave Actionscript behind to take on a not-so-new member to the family: Javascript. As time passed by, I learned HTML, CSS, Python (Qt6), C++, Sql and more.`,
    p4: `I have a constant desire to learn new things. Weather I'm sad or happy, I'm always learning something new in regards to programming.`,
  },
  spanish: {
    p1: `Solia hacer desarrollo web como hobby. Hoy en dia, hago front y back-end. Soy un fan de CSS y JS. Me gusta crear animaciones y en general codigo creativo.`,
    p2: `Empece a programar cuando tenia alrededor de 14 años, cuando Macromedia era una compañia increible y Flash MX6 era obligatorio para la web. Actionscript (similar a JS) era muy poderoso. Podia crear todo tipo de animaciones y efectos, con el uso de matematica simple. Asi es como vivi todos mis dias de infancia.`,
    p3: `En 2020, empece a actualizar mis habilidades y deje a Actionscript atrás para añadir un nuevo(aunque no desconocido) miembro a la familia: Javascript. Al paso del tiempo, aprendi HTML, CSS, Python (Qt6), C++, Sql y mas.`,
    p4: `Tengo un constante deseo de aprender nuevas cosas. Sin importar si estoy triste o feliz, siempre estoy aprendiendo algo nuevo en relacion a la programacion.`,
  },
};
const p = document.querySelectorAll('p');
p[0].textContent = bios.english.p1;
p[1].textContent = bios.english.p2;
p[2].textContent = bios.english.p3;
p[3].textContent = bios.english.p4;

//Update bio language

const translate = document.querySelector('#translate');
translate.classList.add('translate');
translate.textContent = 'Spanish';

const text_switch_fx = function (element, newString, speed) {
  //
  //
  const newTxtArr = newString.split('');
  const oldTxtArr = element.textContent.split('');
  let element_length = element.textContent.length;
  let diff = oldTxtArr.length - newTxtArr.length;
  let i = 0;
  let emptyTxt;
  //
  const exe = function () {
    oldTxtArr[i] = newTxtArr[i];
    //to string
    for (x of oldTxtArr) {
      emptyTxt += x;
      element.textContent = oldTxtArr.join('');
    }
    //Clear
    if (newString.length > element_length) {
      if (i == newTxtArr.length - 1 - diff) {
        clearInterval(interval);
      }
    } else {
      if (i == newTxtArr.length - 1 + diff) {
        clearInterval(interval);
      }
    }
    i++;
  };
  const interval = setInterval(exe, speed);
};

let toggle_bio_lang = function (lang) {
  if (lang == 'es') {
    text_switch_fx(p[0], bios.spanish.p1, 13);
    text_switch_fx(p[1], bios.spanish.p2, 7);
    text_switch_fx(p[2], bios.spanish.p3, 10);
    text_switch_fx(p[3], bios.spanish.p4, 13);
  }
  if (lang == 'en') {
    text_switch_fx(p[0], bios.english.p1, 13);
    text_switch_fx(p[1], bios.english.p2, 7);
    text_switch_fx(p[2], bios.english.p3, 10);
    text_switch_fx(p[3], bios.english.p4, 13);
  }
};

translate.addEventListener('click', (e) => {
  if (translate.textContent == 'Spanish') {
    toggle_bio_lang('es');
    translate.textContent = 'English';
  } else {
    toggle_bio_lang('en');
    translate.textContent = 'Spanish';
  }
});
