
let form = document.getElementById("MyForm");
let radiusInput = document.getElementById("radius");
let volumeInput = document.getElementById("volume");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let radius = parseFloat(radiusInput.value);
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeInput.value = volume.toFixed(2);
});
//volume.toFixsed(2) is used to round the number to 2 decimal places
//Math.pow is used to calculate the power of a number
//Math.PI is used to get the value of PI
