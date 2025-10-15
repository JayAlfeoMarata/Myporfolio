function changeColor() {
    const box = document.getElementById("colorBox");
    // Generate random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
  }