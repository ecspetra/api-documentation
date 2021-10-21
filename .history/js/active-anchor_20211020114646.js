$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr("href");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor).offset().top - 60,
      },
      800
    );
});
