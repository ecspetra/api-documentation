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
var menu = document.querySelector(".navbar");
easeInOutQuint;
scrollSpy(menu, 2000, "easeInOutQuint");