  const menuToggle = document.getElementById('menu-toggle');
  const btnMenu = document.querySelector('.btn');

  menuToggle.addEventListener('click', () => {
    btnMenu.classList.toggle('active');
  });
