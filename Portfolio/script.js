function changeColor() {
  const box = document.getElementById("colorBox");
  if (!box) return;
  box.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const display = document.getElementById("display");

function appendValue(val) {
  if (display) display.value += val;
}

function clearDisplay() {
  if (display) display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}