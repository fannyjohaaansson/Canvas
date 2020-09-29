window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  const clearcanvas = document.querySelector(".Clear");
  const smallpencil = document.querySelector(".SmallPencil");
  const mediumpencil = document.querySelector(".MediumPencil");
  const largepencil = document.querySelector(".LargePencil");
  const blackcolor = document.querySelector(".colorblack");
  const redcolor = document.querySelector(".colorred");
  const bluecolor = document.querySelector(".colorblue");
  const greencolor = document.querySelector(".colorgreen");
  const yellowcolor = document.querySelector(".coloryellow");
  const browncolor = document.querySelector(".colorbrown");
  const eraser = document.querySelector(".eraser");

  //resizing of the canvas
  canvas.height = 500;
  canvas.width = 500;

  //variables
  let painting = false;
  let lineWidth = "5";
  let lineCap = "round";
  let strokeStyle = "black";

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
    if (!painting) {
      return;
    }
    context.lineWidth = lineWidth;
    context.lineCap = lineCap;
    context.strokeStyle = strokeStyle;

    // makes the drawing point start at the same as the mouse
    context.lineTo(e.layerX, e.layerY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.layerX, e.layerY);
  }

  function Delete() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    strokeStyle = "black";
    lineWidth = "5";
  }

  function SmallPencil() {
    lineWidth = "2";
  }

  function MediumPencil() {
    lineWidth = "5";
  }

  function LargePencil() {
    lineWidth = "10";
  }

  function BlackColor() {
    strokeStyle = "#000000";
  }

  function RedColor() {
    strokeStyle = "#f28f79";
  }

  function BlueColor() {
    strokeStyle = "#6aaed9";
  }

  function GreenColor() {
    strokeStyle = "#65bf73";
  }
  function YellowColor() {
    strokeStyle = "#f2d06b";
  }

  function BrownColor() {
    strokeStyle = "#8c603a";
  }
  function Eraser() {
    strokeStyle = "#ffffff";
    lineWidth = "15";
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedposition);
  canvas.addEventListener("mousemove", draw);
  clearcanvas.addEventListener("click", Delete);
  smallpencil.addEventListener("click", SmallPencil);
  mediumpencil.addEventListener("click", MediumPencil);
  largepencil.addEventListener("click", LargePencil);
  blackcolor.addEventListener("click", BlackColor);
  redcolor.addEventListener("click", RedColor);
  bluecolor.addEventListener("click", BlueColor);
  greencolor.addEventListener("click", GreenColor);
  yellowcolor.addEventListener("click", YellowColor);
  browncolor.addEventListener("click", BrownColor);
  eraser.addEventListener("click", Eraser);
});
