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
$(".scroll-spy").scrollSpy({
  scrollDuration: 800,
  scrollEasing: "easeInBack",
  offsetElement: ".header-nav",
  ignoreAnchors: [".not"],
  activeClass: "active-anchor",
});
