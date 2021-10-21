$(document).ready(function () {
  document.querySelectorAll(".sidebar__more-arrow").click(function () {
    $(".sidebar__more-arrow")
      .closest(".sidebar__item > .sidebar__list")
      .removeClass(".hidden");
  });
});
