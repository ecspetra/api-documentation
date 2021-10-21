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

// $(document).ready(function () {
//   $(document).on("scroll", onScroll);

//   //smoothscroll
//   $('a[href^="#"]').on("click", function (e) {
//     if ($(e.target).is("img")) {
//       e.preventDefault();
//       return;
//     }

//     e.preventDefault();
//     $(document).off("scroll");

//     $("a").each(function () {
//       $(this).removeClass("active-anchor");
//     });
//     $(this).addClass("active-anchor");

//     var target = this.hash,
//       menu = target;
//     $target = $(target);
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $target.offset().top + 2,
//         },
//         500,
//         function () {
//           window.location.hash = target;
//           $(document).on("scroll", onScroll);
//         }
//       );
//   });
// });

// function onScroll(event) {
//   var scrollPos = $(document).scrollTop();
//   $(".sidebar a").each(function () {
//     var currLink = $(this);
//     var refElement = $(currLink.attr("href"));
//     if (
//       refElement.position().top <= scrollPos &&
//       refElement.position().top + refElement.height() > scrollPos
//     ) {
//       $(".sidebar ul li a").removeClass("active-anchor");
//       currLink.addClass("active-anchor");
//     } else {
//       currLink.removeClass("active-anchor");
//     }
//   });
// }

$(document).ready(function () {
  (function ($) {
    "use strict";
    // all parameters are optional
    smartScroll.init(
      {
        speed: 700, // default 500
        addActive: true, // default true
        activeClass: "active", // default active
        offset: 150, // default 100
      },
      function () {
        console.log("callback");
      }
    );
  })(jQuery);
});
