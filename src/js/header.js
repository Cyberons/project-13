document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.nav-menu');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-item');

  menu.addEventListener('click', function (e) {
    e.stopPropagation(); // Щоб подія не викликалася на батьківських елементах
    navList.classList.toggle('active');

    navLinks.forEach(link => {
      link.classList.toggle('active');
    });
  });

  document.addEventListener('click', function (e) {
    const isClickInsideMenu = menu.contains(e.target);
    if (!isClickInsideMenu && navList.classList.contains('active')) {
      navList.classList.remove('active');
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const closeButton = document.querySelector('.close-button');

  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
  });

  closeButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });
});
