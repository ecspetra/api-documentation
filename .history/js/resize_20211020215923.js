$(document).ready(function () {
  const resizeData = {
    tracking: false,
    startCursorScreenX: null,
    maxWidth: 500,
    minWidth: 70,
  };

  if (!isMobile()) {
    document
      .getElementById("resize-handle")
      .addEventListener("mousedown", (event) => {
        event.preventDefault();
        event.stopPropagation();
        resizeData.startWidth = document.getElementById("sidebar").offsetWidth;
        resizeData.startCursorScreenX = event.screenX;
        resizeData.tracking = true;
      });

    document.addEventListener("mousemove", function (event) {
      let sidebar = document.getElementById("sidebar");
      if (resizeData.tracking) {
        const cursorScreenXDelta =
          event.screenX - resizeData.startCursorScreenX;
        let newWidth = Math.min(
          resizeData.startWidth + cursorScreenXDelta,
          resizeData.maxWidth
        );
        newWidth = Math.max(resizeData.minWidth, newWidth);

        sidebar.style.width = newWidth + "px";

        hideSidebarIfItsTooSmall();
      }
    });

    document.addEventListener("mouseup", (event) => {
      if (resizeData.tracking) resizeData.tracking = false;
    });
  }

  function hideSidebarIfItsTooSmall() {
    let sidebar = document.getElementById("sidebar");

    if (sidebar.offsetWidth < 150) {
      $(
        "#sidebar > .sidebar-menu > li  > a.multilevel > .more-arrow img"
      ).addClass("hidden");
      $("#sidebar > .sidebar-menu > li > a > span").addClass("hidden");
      $("#sidebar > .sidebar-menu > li > a").css("justify-content", "center");
      $("#sidebar > .sidebar-menu > li > a").css("padding", "12px");
      $("#sidebar > .sidebar-menu > .treeview .treeview-menu").hide();
    } else {
      $(
        "#sidebar > .sidebar-menu > li > a.multilevel > .more-arrow img"
      ).removeClass("hidden");
      $("#sidebar > .sidebar-menu > li > a > span").removeClass("hidden");
      $("#sidebar > .sidebar-menu > li > a").css(
        "justify-content",
        "flex-start"
      );
      $("#sidebar > .sidebar-menu > li  > a").css(
        "padding",
        "12px 28px 12px 12px"
      );
    }
  }
});

function isMobile() {
  document.createEvent("TouchEvent");
  return true;
}
