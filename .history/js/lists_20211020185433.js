// $(document).ready(function () {
//   var toggler = document.getElementsByClassName("drop");
//   var i;

//   for (i = 0; i < toggler.length; i++) {
//     toggler[i].addEventListener("click", function (event) {
//       event.stopPropagation();
//       if (clickIsNotDirectlyOnSidebarItem(event)) {
//         return;
//       }

//       this.querySelector(".nested").classList.toggle("active");
//       this.classList.toggle("opened");
//     });
//   }

//   function clickIsNotDirectlyOnSidebarItem(e) {
//     return (
//       e.target !== e.currentTarget &&
//       $(e.target).parent(".sidebar__item")[0] !== e.currentTarget
//     );
//   }
// });

// $.sidebarMenu = function (menu) {
//   var animationSpeed = 300;

//   $(menu).on("click", "li a", function (e) {
//     var $this = $(this);
//     var checkElement = $this.next();

//     if (checkElement.is(".treeview-menu") && checkElement.is(":visible")) {
//       checkElement.slideUp(animationSpeed, function () {
//         checkElement.removeClass("menu-open");
//       });
//       checkElement.parent("li").removeClass("active");
//     }

//     //If the menu is not visible
//     else if (
//       checkElement.is(".treeview-menu") &&
//       !checkElement.is(":visible")
//     ) {
//       //Get the parent menu
//       var parent = $this.parents("ul").first();
//       //Close all open menus within the parent
//       var ul = parent.find("ul:visible").slideUp(animationSpeed);
//       //Remove the menu-open class from the parent
//       ul.removeClass("menu-open");
//       //Get the parent li
//       var parent_li = $this.parent("li");

//       //Open the target menu and add the menu-open class
//       checkElement.slideDown(animationSpeed, function () {
//         //Add the class active to the parent li
//         checkElement.addClass("menu-open");
//         parent.find("li.active").removeClass("active");
//         parent_li.addClass("active");
//       });
//     }
//     //if this isn't a link, prevent the page from being redirected
//     if (checkElement.is(".treeview-menu")) {
//       e.preventDefault();
//     }
//   });
// };

// $.sidebarMenu($(".sidebar-menu"));

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

      sidebarSize = document.getElementById("sidebar");

      if (sidebarSize.style.width => "150px") {
        checkElement.slideDown(animationSpeed, function () {
          //Add the class active to the parent li
          checkElement.addClass("menu-open");
          parent.find("li.active").removeClass("active");
          parent_li.addClass("active");
        });
      }
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is(".treeview-menu")) {
      e.preventDefault();
    }
  });
};

$.sidebarMenu($(".sidebar-menu"));
