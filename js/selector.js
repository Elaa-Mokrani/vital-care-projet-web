const trigger = document.querySelector('.dropdown-trigger');
const menu = document.querySelector('.dropdown-menu');

trigger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
