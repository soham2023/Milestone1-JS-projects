const btn = document.getElementById("btn");
const heading = document.getElementById("heading");

const randomColor = () => {
  let val = ["#808080", "#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#800080", "#FFA500"];
  let randomIndex = Math.floor(Math.random() * val.length);
  return val[randomIndex];
};

function changeRandomColor() {
  document.body.style.backgroundColor = randomColor(); 
}

btn.addEventListener("click", changeRandomColor);
