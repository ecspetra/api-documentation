jQuery(function ($) {
  const section = $(".section"),
    nav = $(".sidebar"),
    navHeight = nav.outerHeight(); // получаем высоту навигации

  // поворот экрана
  //   window.addEventListener(
  //     "orientationchange",
  //     function () {
  //       navHeight = nav.outerHeight();
  //     },
  //     false
  //   );

  $(window).on("scroll", function () {
    const position = $(this).scrollTop();

    section.each(function () {
      const top = $(this).offset().top - navHeight - 5,
        bottom = top + $(this).outerHeight();

      if (position >= top && position <= bottom) {
        nav.find("a").removeClass("active-anchor");
        section.removeClass("active-anchor");

        $(this).addClass("active-anchor");
        nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .addClass("active-anchor");
      }
    });
  });

  nav.find("a").on("click", function () {
    const id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - navHeight,
      },
      487
    );

    return false;
  });
});
