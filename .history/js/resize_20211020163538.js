$(document).ready(function () {
  const resizeData = {
    tracking: false,
    startCursorScreenX: null,
    maxWidth: 500,
    minWidth: 50,
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
        if (sidebar.style.width < "200px") {
          $(
            "#sidebar ul li a span, #sidebar ul li a.multilevel:after"
          ).addClass("hidden");
        } else {
          $("#sidebar ul li a span").removeClass("hidden");
        }
      }
    }
  });

  document.addEventListener("mouseup", (event) => {
    if (resizeData.tracking) resizeData.tracking = false;
  });
});
