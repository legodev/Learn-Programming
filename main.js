const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');
const btnDM = document.querySelector('.dark-mode');
const svg = document.querySelector('.svg')

btnDM.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const imagenActual = svg.src
    if (imagenActual.includes('moon-solid.svg')) {
        svg.src = './icons/sun-solid.svg'
        svg.alt = 'Light-mode'
    } else {
        svg.src = './icons/moon-solid.svg'
        svg.alt = 'Dark-mode'
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.link');

    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault()

            const targetId = link.getAttribute('href')

            const targetElement = document.querySelector(targetId)

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
});

menu.addEventListener('click', () => {
    menuList
    menuList.classList.toggle('show');
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuList.classList.remove('show')
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('a[href^="#"]');

//     links.forEach(link => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();

//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//       });
//     });
//   });
