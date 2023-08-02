const Input = document.querySelector(".number");

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
let dem = 0;
const count = function (row) {
  let dem = 0;
  for (let i = row; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      dem++;
    }
  }
  return dem;
};

Input.addEventListener("focus", () => {
  let arr = Array.from(container.children);
  arr.forEach((el) => el.remove());
});

btn.onclick = () => {
  const number = count(+Input.value);
  // console.log("number", number);
  for (let i = 1; i <= number; i += dem) {
    dem++;
    if (i + dem > number) {
      let string = "";
      for (let j = i; j <= i + (number - i); j++) {
        string = string + " " + j;
      }
      let content = document.createElement("h2");
      content.textContent = string;
      container.appendChild(content);
    } else {
      let string = "";
      for (let j = i; j < i + dem; j++) {
        string = string + " " + j;
      }
      let content = document.createElement("h2");
      content.textContent = string;
      container.appendChild(content);
    }
  }
};
