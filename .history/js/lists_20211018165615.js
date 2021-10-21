$(document).ready(function () {
  $(".sidebar__more-arrow").click(function () {
    expandList($(this).closest(".sidebar__item > .sidebar__list"));
  });

  function expandList() {
    var list = document.getElementsByClassName("sidebar__list");
    $(".sidebar__list").removeClass("hidden");
  }
});
