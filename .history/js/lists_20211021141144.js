$.sidebarMenu = function (menu) {
  var animationSpeed = 300;

  $(menu).on("click", "li a", function (e) {
    var $this = $(this);
    var checkElement = $this.next();

    if (checkElement.is(".treeview-menu") && checkElement.is(":visible")) {
      checkElement.slideUp(animationSpeed, function () {
        checkElement.removeClass("menu-open");
      });
      checkElement.parent("li").removeClass("active");
    }

    //If the menu is not visible
    else if (
      checkElement.is(".treeview-menu") &&
      !checkElement.is(":visible")
    ) {
      //Get the parent menu
      var parent = $this.parents("ul").first();
      //Close all open menus within the parent

      var ul = parent.find("ul:visible").slideUp(animationSpeed);
      //Remove the menu-open class from the parent
      ul.removeClass("menu-open");
      //Get the parent li
      var parent_li = $this.parent("li");

      //Open the target menu and add the menu-open class
      let sidebar = document.getElementById("sidebar");

      if (sidebar.offsetWidth > 150) {
        // if ($(e.target).is("a, span")) {
        //   e.preventDefault();
        //   return;
        // }

        checkElement.slideDown(animationSpeed, function () {
          //Add the class active to the parent li
          checkElement.addClass("menu-open");
          parent.find("li.active").removeClass("active");
          parent_li.addClass("active");
        });
      }
    }
    $(".sidebar-menu")
      .$(".closed")
      .on("click", function (e) {
        $(".sidebar-menu").each("ul").slideUp(animationSpeed);
      });

    if (checkElement.is(".treeview-menu")) {
      //if this isn't a link, prevent the page from being redirected
      e.preventDefault();
    }
  });
};

$.sidebarMenu($(".sidebar-menu"));
