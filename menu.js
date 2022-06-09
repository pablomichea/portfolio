'strict mode';

////////////Vars
let contx_Menu = document.createElement('div');
let toggleMenu = 'True';

////////////Functions
let showMenu = (evt) => {
  evt.preventDefault();

  let x = evt.clientX; //Posicion x del mouse
  let y = evt.clientY;
  let x_obj_border_dist = 0;
  let y_obj_border_dist = 0;

  if (toggleMenu) {
    contx_Menu.style.display = 'block';
    contx_Menu.style.top = `${y - 7}px`;
    contx_Menu.style.left = `${x - 8}px`;

    x_obj_border_dist = window.innerWidth - x - contx_Menu.offsetWidth;
    y_obj_border_dist = window.innerHeight - y - contx_Menu.offsetHeight;

    if (!x_obj_border_dist) {
      body.style.overflow = 'hidden';
      contx_Menu.style.left = `${x + x_obj_border_dist - 14}px`;
    }
    if (!y_obj_border_dist) {
      body.style.overflow = 'hidden';
      contx_Menu.style.top = `${y + y_obj_border_dist - 15}px`;
    }

    contx_Menu.style.opacity = '96%';
    toggleMenu = !toggleMenu;
  } else {
    hideMenu();
    // evt.preventDefault();
  }
};

let hideMenu = (key) => {
  if (!toggleMenu || key === 'Escape') {
    contx_Menu.style.display = 'none';
    toggleMenu = !toggleMenu;
    body.style.overflow = 'auto';
    contx_Menu.style.opacity = '0%';
  }
};

// let buildMenu = (...args) => {
//   let injectHTML = ``;
//   for (x in args) {
//     if (x == 0) {
//       injectHTML = `<${args[x]}>`;
//     } else {
//       injectHTML += `<${args[x]}></${args[x]}>`;
//     }
//   }
//   injectHTML += `</${args[0]}>`;
//   return injectHTML;
// };
// console.log(buildMenu('i', 'p'));

////////////Events
document.addEventListener('contextmenu', showMenu);
document.addEventListener('click', hideMenu);
document.addEventListener('keyup', hideMenu);

////////////Inits
contx_Menu.classList.add('contxMenu');

contx_Menu.innerHTML = '<p>Hola</p>';

body.appendChild(contx_Menu);
