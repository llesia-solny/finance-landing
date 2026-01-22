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
