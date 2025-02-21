const darkMode = document.getElementById("theme-btn");
const button = document.querySelector(".generate-btn");
const body = document.querySelector(".color-generator");
const text = document.querySelector(".color-code");
let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let colorCode = "#";
let copyText = document.querySelector(".color-code").innerHTML;
// Copy the color code to clipboard
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text.innerHTML);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Dark Mode Functionality
darkMode.addEventListener("click", () => {
  console.log("Hello");

  const html = document.documentElement;
  //   change to darkmode
  html.classList.toggle("dark");
  //   change icon
  darkMode.innerHTML = html.classList.contains("dark")
    ? `<img
              src="https://res.cloudinary.com/dvydugv8v/image/upload/v1739622639/todo-app-main/icon-sun_eevtcd.svg"
              class="menu icon"
            />`
    : `<img
              src="https://res.cloudinary.com/dvydugv8v/image/upload/v1739622639/todo-app-main/icon-moon_p14ty5.svg"
              class="menu icon"
            />`;
});

function generateColor() {
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colors.length);
    //console.log(random);
    colorCode += colors[random];
  }
  //console.log(colorCode);
}

button.addEventListener("click", () => {
  generateColor();
  body.style.backgroundColor = colorCode;
  text.textContent = colorCode;
  colorCode = "#";
});
