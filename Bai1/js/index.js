const Input = document.querySelector(".input");
const Text = document.querySelector(".text");
const table = document.querySelector(".table");
const btn = document.querySelector(".btn");

let giaTienTotal,
  giaTienFirst = 0;
const soKmFn = function (soKm, gia, thanhTien) {
  const row = document.createElement("tr");
  const td_gia = document.createElement("td");
  td_gia.textContent = gia;
  const td_soKm = document.createElement("td");
  td_soKm.textContent = soKm;
  const td_thanhTien = document.createElement("td");
  td_thanhTien.textContent = thanhTien;
  row.appendChild(td_soKm);
  row.appendChild(td_gia);
  row.appendChild(td_thanhTien);
  table.appendChild(row);
};
Input.addEventListener("change", () => {
  try {
    if (table.children) {
      console.log("x");
      const arr = Array.from(table.children);
      if (arr.length > 1) {
        arr.forEach((el, index) => {
          arr[++index].remove();
        });
      }
    }
  } catch (error) {}
});
btn.onclick = () => {
  giaTienTotal = 0;
  soKm = Input.value;
  Text.textContent = soKm ? soKm : 0;
  if (soKm > 5) {
    let giaTien = giaTienTotal + (soKm - 5) * 11000;
    giaTienTotal = giaTienTotal + giaTien;
    soKmFn(soKm - 5, 11000, giaTien);
  }
  if (soKm > 1) {
    let giaTien = (soKm <= 5 ? soKm - 1 : 4) * 13500;
    giaTienTotal = giaTienTotal + giaTien;
    soKmFn(soKm <= 5 ? soKm - 1 : 4, 13500, giaTien);
  }
  if (soKm > 0) {
    let giaTien = giaTienFirst + 1 * 15000;
    giaTienTotal = giaTienTotal + giaTien;
    soKmFn(1, 15000, giaTien);
  }
  if (soKm > 120) {
    giaTienTotal = giaTienTotal - giaTienTotal / 10;
  }
  soKmFn("Tổng", "", giaTienTotal);
};
