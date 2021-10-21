$(document).ready(function () {
  const resizeData = {
    tracking: false,
    startCursorScreenX: null,
    maxWidth: 500,
    minWidth: 70,
  };

  document
    .getElementById("resize-handle")
    .addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      resizeData.startWidth = document.getElementById("sidebar").offsetWidth;
      resizeData.startCursorScreenX = event.screenX;
      resizeData.tracking = true;
    });

  document.addEventListener("mousemove", (event) => {
    sidebar = document.getElementById("sidebar");
    if (resizeData.tracking) {
      const cursorScreenXDelta = event.screenX - resizeData.startCursorScreenX;
      let newWidth = Math.min(
        resizeData.startWidth + cursorScreenXDelta,
        resizeData.maxWidth
      );
      newWidth = Math.max(resizeData.minWidth, newWidth);

      sidebar.style.width = newWidth + "px";
      function hideSidebar() {
        if (sidebar.style.width < "150px") {
          $("#sidebar > .sidebar-menu > li  > a.multilevel > img").addClass(
            "hidden"
          );
          $("#sidebar > .sidebar-menu > li > a > span").addClass("hidden");
          $("#sidebar > .sidebar-menu > li > a").css(
            "justify-content",
            "center"
          );
          $("#sidebar > .sidebar-menu > li > a").css("padding", "12px");
          $("#sidebar > .sidebar-menu > li").removeClass("hidden");
        } else {
          $("#sidebar > .sidebar-menu > li > a.multilevel > img").removeClass(
            "hidden"
          );
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
      hideSidebar();
    }
  });

  document.addEventListener("mouseup", (event) => {
    if (resizeData.tracking) resizeData.tracking = false;
  });
});
