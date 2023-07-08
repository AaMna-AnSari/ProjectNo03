//

function circle_Button() {
  const body = document.querySelector("body");
  const toggle = document.getElementById("circle");
  const rectangle = document.getElementById("rectangle");
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  rectangle.classList.toggle("active");
}
