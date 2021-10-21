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
    if (resizeData.tracking) {
      const cursorScreenXDelta = event.screenX - resizeData.startCursorScreenX;
      let newWidth = Math.min(
        resizeData.startWidth + cursorScreenXDelta,
        resizeData.maxWidth
      );
      newWidth = Math.max(resizeData.minWidth, newWidth);
      sidebar = document.getElementById("sidebar");
      sidebar.style.width = newWidth + "px";

      console.log(sidebar.style.width);

      hideSidebar();

      function hideSidebar() {
        if (sidebar.style.width < "150px") {
          $("#sidebar ul li > a.multilevel img").addClass("hidden");
          $("#sidebar ul li > a span").addClass("hidden");
          $("#sidebar ul li > a").css("justify-content", "center");
          $("#sidebar ul li > a").css("padding", "12px");
        } else {
          $("#sidebar ul li > a.multilevel img").removeClass("hidden");
          $("#sidebar ul li > a span").removeClass("hidden");
          $("#sidebar ul li > a").css("justify-content", "flex-start");
          $("#sidebar ul li > a").css("padding", "12px 28px 12px 12px");
        }
      }
    }
  });

  document.addEventListener("mouseup", (event) => {
    if (resizeData.tracking) resizeData.tracking = false;
  });
});
