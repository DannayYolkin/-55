const form7120 = document.querySelector("#form");
form7120.noValidate = true;
form7120.addEventListener("submit", abc);

function abc(event) {
  Array.from(form7120).forEach(function (element) {
    if (!element.checkValidity()) {
      element.classList.add("yolkin2");
    }
  });
  if (!form7120.checkValidity()) {
    event.preventDefault();
  }
}
