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
      document.getElementById("sidebar").style.width = newWidth + "px";
    }
  });

  document.addEventListener("mouseup", (event) => {
    if (resizeData.tracking) resizeData.tracking = false;
  });

  if (document.getElementById("sidebar").style.width <= "100px") {
  }

  // $(window).on('mousemove', null, null, _.debounce((event) => {
  //   if (resizeData.tracking) {
  //     const cursorScreenXDelta = event.screenX - resizeData.startCursorScreenX;
  //     let newWidth = Math.min(resizeData.startWidth + cursorScreenXDelta, resizeData.maxWidth);
  //     newWidth = Math.max(resizeData.minWidth, newWidth);
  //     document.getElementById('sidebar').style.width = newWidth + 'px';
  //   }
  // }, 1));
});
