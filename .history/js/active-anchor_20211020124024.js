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

$(".sidebar").scrollSpy({
  scrollDuration: 800,
  scrollEasing: "easeInBack",
  offsetElement: ".sidebar",
  ignoreAnchors: [".not"],
  activeClass: "active-anchor",
});
