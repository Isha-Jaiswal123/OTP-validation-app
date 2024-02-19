let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");

inputs.forEach((input, index) => {
  input.addEventListener("keyup", () => {
    let curreninput = input;
    let nextinput = input.nextElementSibling;
    let previousinput = input.previousElementSibling;

    if (curreninput.value.length > 1) {
      curreninput.value = "";
      return;
    }
    if (
      nextinput &&
      nextinput.hasAttribute("disabled") &&
      curreninput.value !== ""
    ) {
      nextinput.removeAttribute("disabled");
      nextinput.focus();
    }
  });
});

function varified() {
  alert("OTP is varified !");
}
