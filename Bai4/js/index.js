const Input = document.querySelector(".number");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.onclick = () => {
  const number = Input.value;
  if (number > 1) {
    const soNguyenTo = function (number) {
      let flag = true;
      if (number <= 1) {
        flag = false;
        return flag;
      } else {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            flag = false;
          }
        }
        return flag;
      }
    };
    if (soNguyenTo(number)) {
      container.textContent = `${number} là số nguyên tố`;
    } else {
      container.textContent = ` ${number} không phải là số nguyên tố`;
    }
  } else container.textContent = ` ${number} không phải là số nguyên tố`;
};
