  var navButton = document.querySelector('.navigation-button');
  var navMenu = document.querySelector('.navigation-menu');
  var win = window;
  var logo = document.querySelector('.box');

  function openMenu(event) {

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');


    logo.style.margin = "20%";
    event.preventDefault();
    event.stopImmediatePropagation();

  }

  function closeMenu(event) {
    if (navButton.classList.contains('active')) {
      navButton.classList.remove('active');
      navMenu.classList.remove('active');
      logo.style.margin = "";
    }

  }
  navButton.addEventListener('click', openMenu, true);

  win.addEventListener('click', closeMenu, true);