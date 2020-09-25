window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  const clearcanvas = document.querySelector(".Clear");

  //resizing of the canvas
  canvas.height = 500;
  canvas.width = 650;

  //variables
  let painting = false;

  //event listeners
  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedposition() {
    painting = false;
    context.beginPath();
  }

  // the actual line and it's properies
  function draw(e) {
    if (!painting) return;
    context.lineWidth = "5";
    context.lineCap = "round";
    context.strokeStyle = "black";

    // makes the drawing point start at the same as the mouse
    context.lineTo(e.layerX, e.layerY);
    context.stroke();
    context.beginPath(e.layerX, e.layerY);
    context.moveTo(e.layerX, e.layerY);
  }

  function Delete() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedposition);
  canvas.addEventListener("mousemove", draw);
  clearcanvas.addEventListener("click", Delete);
});
