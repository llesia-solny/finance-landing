/* =========================
   SCROLL ANIMATION
========================= */

const animatedItems = document.querySelectorAll('.animate-on-scroll');
const isMobile = window.innerWidth <= 768;

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  animatedItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('active');
    }
  });
}

/* На мобилке показываем сразу */
if (isMobile) {
  animatedItems.forEach(item => item.classList.add('active'));
} else {
  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('load', showOnScroll);
}


/* =========================
   MOBILE MENU
========================= */

const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  });

  // закрытие по клику на ссылку
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      burger.classList.remove('active');
    });
  });
}
