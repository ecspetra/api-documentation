$(document).ready(function () {
  $(".sidebar__more-arrow").click(function () {
    expandList($(this).closest(".sidebar__item > .sidebar__list"));
  });

  function expandList() {
    var list = document.querySelector("sidebar__list");
    if (list.hasClass("hidden")) {
      $(".sidebar__list").removeClass("hidden");
    }
  }
});
