const inputValue = document.querySelector(".input");
const textValue = document.querySelector(".text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

console.log(inputValue, textValue);
let sum = 0;
btn.onclick = () => {
  const soNguyen = inputValue.value;
  textValue.textContent = +soNguyen;
  if (+soNguyen >= 0) {
    for (let i = 1; i <= soNguyen; i++) {
      sum = i * (i + 1) + sum;
    }
    result.textContent = sum;
  } else {
    result.textContent = ` Số nguyên cần lớn hơn hoặc bằng 0 `;
  }
};
