$(document).ready(function () {
  var toggler = document.getElementsByClassName("drop");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function (event) {
      event.stopPropagation();
      if (clickIsNotDirectlyOnSidebarItem(event)) {
        return;
      }

      console.log(this);
      this.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("opened");
    });
  }

  function clickIsNotDirectlyOnSidebarItem(e) {
    return (
      e.target !== e.currentTarget &&
      $(e.target).parent(".sidebar__item")[0] !== e.currentTarget
    );
  }
});
