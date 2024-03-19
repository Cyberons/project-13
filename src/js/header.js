document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.nav-menu');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-item');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const closeButton = document.querySelector('.close-button');
  const mobileButtonLink = document.querySelector('.mobile-button-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-item');

  function toggleNav() {
    navList.classList.toggle('active');
    navLinks.forEach(link => {
      link.classList.toggle('active');
    });
  }

  function handleMenuClick(e) {
    e.stopPropagation();
    toggleNav();
  }

  function handleOutsideMenuClick(e) {
    const isClickInsideMenu = menu.contains(e.target);
    if (!isClickInsideMenu && navList.classList.contains('active')) {
      toggleNav();
    }
  }

  function handleMobileNavItemClick() {
    closeMobileMenu();
  }

  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
  }

  menu.addEventListener('click', handleMenuClick);
  document.addEventListener('click', handleOutsideMenuClick);
  mobileMenuButton.addEventListener('click', openMobileMenu);
  closeButton.addEventListener('click', closeMobileMenu);
  mobileButtonLink.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', handleMobileNavItemClick);
  });
});
