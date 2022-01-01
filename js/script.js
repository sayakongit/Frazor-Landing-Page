var btn = document.querySelector("#btn-modal");
var bg = document.querySelector(".modal-bg");
var cls = document.querySelector(".btn-close");

var submit = document.querySelector(".btn-form");

btn.addEventListener("click", function () {
  bg.classList.add("bg-active");
});

cls.addEventListener("click", function () {
  bg.classList.remove("bg-active");
});

submit.addEventListener("click", function () {
  bg.classList.remove("bg-active");
});

// Menu Ham

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Send mail

function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("name").value,
    from_mail: document.getElementById("email").value,
    from_number: document.getElementById("phone").value,
    message: document.getElementById("area").value,
  };

  emailjs
    .send("service_b5hrw29", "template_oqtltxf", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    });
}
