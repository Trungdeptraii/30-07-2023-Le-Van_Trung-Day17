const Input = document.querySelector(".number");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

tong = 0;
function sum(number) {
  if (number) {
    tong = tong + 1 / number;
    --number;
  } else {
    container.textContent = tong;
    return true;
  }
  sum(number);
}
btn.onclick = () => {
  if (Input.value > 0) {
    sum(Input.value);
  } else {
    alert("Đầu vào phải là số nguyên dương");
  }
};
