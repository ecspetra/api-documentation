$(document).ready(function () {
  document.querySelectorAll(".sidebar__more-arrow").click(function () {
    expandList($(this).closest(".sidebar__item > .sidebar__list"));
  });

  function expandList() {
    if (".sidebar__list".hasClass("hidden")) {
      $(".sidebar__list").removeClass("hidden");
    }
  }
});
