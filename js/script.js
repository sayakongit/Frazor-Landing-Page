var btn = document.querySelector("#btn-modal");
var bg = document.querySelector(".modal-bg");
var cls = document.querySelector(".btn-close");

btn.addEventListener("click", function () {
  bg.classList.add("bg-active");
});

cls.addEventListener("click", function () {
  bg.classList.remove("bg-active");
});
