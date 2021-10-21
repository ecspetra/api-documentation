// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//   smoothLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = smoothLink.getAttribute("href");

//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }
$(document).ready(function () {
  // Tells the function to wait to preform until everything on the page has loaded.
  $(window).scroll(function () {
    // Says this function is preformed continuisly while scrolling.
    var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
      SectionOneOffset = $("#section-one").offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
      SectionTwoOffset = $("#section-two").offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.

    if (Scroll >= SectionOneOffset) {
      // If you have scrolled past section one do this.
      $(".menu-item-1").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
    } else {
      // If you have not scrolled section one do this.
      $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
    }
    if (Scroll >= SectionTwoOffset) {
      // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
      $(".menu-item-2").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
      $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
    } else {
      // If you have not scrolled section two do this.
      $(".menu-item-2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
    }
  });
});
