$(document).ready(function () {
  $(".sidebar__more-arrow").click(function () {
    expandList($(this).parent().children(".sidebar__list"));
  });

  function expandList() {
    if ($(".sidebar__list").hasClass("hidden")) {
      $(".sidebar__list").removeClass("hidden");
    } else {
      $(".sidebar__list").addClass("hidden");
    }
  }
});
