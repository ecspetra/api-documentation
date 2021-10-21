'use strict';

{
  const Sidebar = {
    BUTTON: document.querySelector('#header-button'),
    MENU: document.querySelector('#sidebar-button')
  }

  const clickSidebarHandler = () => {
    Sidebar.MENU.classList.toggle('active');
    document.body.classList.toggle('scroll-off');
  };

  Sidebar.BUTTON.addEventListener('click', clickSidebarHandler);
}
