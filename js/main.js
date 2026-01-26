/* ===== SCROLL ANIMATION ===== */
const animatedItems = document.querySelectorAll('.animate-on-scroll');

const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;

  animatedItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('active');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

/* ===== MOBILE MENU ===== */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

/* закрытие меню при клике */
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const button = contactForm.querySelector('button');
    button.classList.add('loading');

    // имитация отправки
    setTimeout(() => {
      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';
    }, 1500);
  });
}
