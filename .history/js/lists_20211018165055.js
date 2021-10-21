$(document).ready(function () {
  document.querySelectorAll(".sidebar__more-arrow").click(function () {
    $(".sidebar__more-arrow")
      .closest(".sidebar__item > .sidebar__list")
      .removeClass(".hidden");
  });
});

$(".btn-all-books").click(function () {
  $(this).addClass("expand");
  expandList($(this).closest(".ugc-popup__book"));
});

function expandList($selectedPublicationElement) {
  if (
    $selectedPublicationElement.hasClass("selected-book") &&
    !$(".ugc-popup-publications-list").hasClass("invisible")
  ) {
    $(".ugc-popup-publications-list").appendTo("#search-list");
    $(".ugc-popup-publications-list").addClass("invisible");
    $selectedPublicationElement.removeClass("selected-book");
  } else {
    $selectedPublicationElement.addClass("selected-book");
    $(".ugc-popup-publications-list").appendTo($selectedPublicationElement);
    $(".ugc-popup-publications-list").removeClass("invisible");
  }
}
