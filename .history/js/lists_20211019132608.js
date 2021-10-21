$(document).ready(function () {
  var toggler = document.getElementsByClassName("drop");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function (event) {
      console.log(event.target);
      if (event.target !== this) return;
      console.log(this);
      this.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("opened");
    });
  }
});
