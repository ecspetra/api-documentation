require(["jquery"], function ($) {
  var anchor = {
    el_menu: ".ul-w-mainmenu-nav:eq(0)", // Меню

    // Старт
    init: function () {
      anchor.menu();
      $(document).scroll(function () {
        anchor.scolling();
      });
    },

    // Собираем якоря из меню
    menu: function () {
      anchor.links_arr = [];
      $("" + anchor.el_menu + " a").each(function (i) {
        if ($(this).attr("href")) {
          if ($(this).attr("href").indexOf("#") != -1) {
            var resh = $(this).attr("href").indexOf("#"),
              all = $(this).attr("href").length,
              val = $(this).attr("href").substr(resh, all);
            anchor.links_arr[i] = $(this).attr("href") + "::" + val;
          }
        }
      });
    },

    // Кто-то Скрулит, я ловлю этот прекрасный момент
    scolling: function () {
      anchor.links_arr.forEach(function (item) {
        var item_arr = item.split("::");
        if (anchor.inWindow("" + item_arr[1] + "").length > 0) {
          $(".ul-w-mainmenu-active-item").removeClass(
            "ul-w-mainmenu-active-item"
          );
          $('a[href="' + item_arr[0] + '"]')
            .parent()
            .addClass("ul-w-mainmenu-active-item");
          return false;
        }
      });
    },

    // Проверка якоря в области видимости
    inWindow: function (s) {
      var scrollTop = $(window).scrollTop(),
        windowHeight = $(window).height(),
        currentEls = $(s),
        result = [];
      currentEls.each(function () {
        var el = $(this),
          offset = el.offset();
        if (
          scrollTop <= offset.top &&
          el.height() + offset.top < scrollTop + windowHeight
        )
          result.push(this);
      });
      return $(result);
    },
  };
  anchor.init();
});
