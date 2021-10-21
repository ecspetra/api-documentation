var $page = $("html, body");
$('a[href*="#"]').click(function () {
  var href = $.attr(this, "href");
  $root.animate(
    {
      scrollTop: $(href).offset().top,
    },
    400,
    function () {
      window.location.hash = href;
    }
  );
  return false;
});
