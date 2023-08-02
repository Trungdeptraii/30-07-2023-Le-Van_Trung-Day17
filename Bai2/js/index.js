/* Bai1
let km = 121,
  giaTien = 0;

if (km >= 5) {
  giaTien = giaTien + (km - 5 + 1) * 11000;
  console.log(km, giaTien);
}
if (km > 1) {
  giaTien = giaTien + 3 * 13500;
  console.log(km, giaTien);
}
if (km > 0) {
  giaTien = giaTien + 1 * 15000;
  console.log(km, giaTien);
}
if (km > 120) {
  giaTien = giaTien - giaTien / 10;
  console.log(km, giaTien);
}
console.log("giaTien", giaTien);
*/
const soDienInput = document.querySelector(".input");
const soDienText = document.querySelector(".text");
const cap = document.querySelector(".cap");
const table = document.querySelector(".table");
const btn = document.querySelector(".btn");

let soDien, giaDien;
const muc1 = 1,
  muc2 = 50,
  muc3 = 100,
  muc4 = 200,
  muc5 = 300,
  muc6 = 400;

const tienDien = function (muc, gia, soDien, thanhTien) {
  const row = document.createElement("tr");
  const td_muc = document.createElement("td");
  td_muc.textContent = muc;
  const td_gia = document.createElement("td");
  td_gia.textContent = gia;
  const td_soDien = document.createElement("td");
  td_soDien.textContent = soDien;
  const td_thanhTien = document.createElement("td");
  td_thanhTien.textContent = thanhTien;
  row.appendChild(td_muc);
  row.appendChild(td_gia);
  row.appendChild(td_soDien);
  row.appendChild(td_thanhTien);
  table.appendChild(row);
};
soDienInput.addEventListener("change", () => {
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
  giaDien = 0;
  soDien = soDienInput.value;
  soDienText.textContent = soDien ? soDien : 0;
  cap.textContent =
    soDien > 400
      ? 6
      : soDien > 300
      ? 5
      : soDien > 200
      ? 4
      : soDien > 100
      ? 3
      : soDien > 50
      ? 2
      : 1;
  if (soDien > muc6) {
    giaDien = 2937 * (soDien - muc6) + giaDien;
    tienDien("6", 2937, soDien - muc6, giaDien);
  }
  if (soDien > muc5) {
    giaDien =
      2834 * (soDien <= 400 ? soDien - muc5 : soDien > 400 ? 100 : 100) +
      giaDien;
    tienDien(
      "5",
      2834,
      soDien <= 400 ? soDien - muc5 : soDien > 400 ? 100 : 100,
      giaDien
    );
  }
  if (soDien >= muc4) {
    giaDien =
      2536 * (soDien <= 300 ? soDien - muc4 : soDien > 300 ? 100 : 100) +
      giaDien;
    tienDien(
      "4",
      2536,
      soDien <= 300 ? soDien - muc4 : soDien > 300 ? 100 : 100,
      giaDien
    );
  }
  if (soDien > muc3) {
    giaDien =
      2014 * (soDien <= 200 ? soDien - muc3 : soDien > 200 ? 100 : 100) +
      giaDien;
    tienDien(
      "3",
      2014,
      soDien <= 200 ? soDien - muc3 : soDien > 200 ? 100 : 100,
      giaDien
    );
  }
  if (soDien > muc2) {
    giaDien =
      1734 * (soDien <= 100 ? soDien - muc2 : soDien > 100 ? 50 : 50) + giaDien;
    tienDien(
      "2",
      1734,
      soDien <= 100 ? soDien - muc2 : soDien > 100 ? 50 : 50,
      giaDien
    );
  }
  if (soDien >= muc1) {
    giaDien1 = 1678 * (soDien <= 50 ? soDien : soDien > 50 ? 50 : 50);
    tienDien(
      "1",
      1678,
      soDien <= 50 ? soDien : soDien > 50 ? 50 : 50,
      giaDien1
    );
    tienDien("Tổng", "", "", giaDien1 + giaDien);
  }
};

/* Bai3
const sodien = document.querySelector(".sodien");

const n = 3;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = i * (i + 1) + sum;
}
console.log("sum", sum);
*/

/* Bai4
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
let number = 12;
if (soNguyenTo(number)) {
  console.log(`${number} là số nguyên tố`);
} else {
  console.log(` ${number} không phải là số nguyên tố`);
}
*/

/* Bai5
let dem = 0;
const number = 15;
for (let i = 1; i <= number; i += dem) {
  dem++;
  if (i + dem > number) {
    let string = "";
    for (let j = i; j <= i + (number - i); j++) {
      string = string + " " + j;
      // console.log("j", j);
    }
    console.log(string);
  } else {
    let string = "";
    for (let j = i; j < i + dem; j++) {
      // console.log("j", j);
      string = string + " " + j;
    }
    console.log(string);
  }
}
*/

/* Bai6
for (let i = 8; i >= 1; i--) {
  let row = "";
  for (let j = i; j < 8 + i; j++) {
    if (i % 2 != 0) {
      if (j % 2 != 0) {
        row = row + " " + 1;
      } else {
        row = row + " " + 0;
      }
    } else {
      if (j % 2 != 0) {
        row = row + " " + 1;
      } else {
        row = row + " " + 0;
      }
    }
  }
  console.log(row);
}
*/

/* Bai7
for (let i = 1; i <= 10; i++) {
  console.log(`Bảng cửu chương số ${i}: `);
  for (j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("------------------");
}
*/

// const soDien = 80;
// let price = 0;
// let cap = 0;
// if (soDien > 400) {
//   price =
//     (soDien - 400) * 2.927 +
//     100 * 2.834 +
//     100 * 2.536 +
//     100 * 2.014 +
//     50 * 1.734 +
//     50 * 1.678;
// } else {
//   if (soDien > 300) {
//     price =
//       (soDien - 300) * 2.834 +
//       100 * 2.536 +
//       100 * 2.014 +
//       50 * 1.734 +
//       50 * 1.678;
//   } else {
//     if (soDien > 200) {
//       price = (soDien - 200) * 2.536 + 100 * 2.014 + 50 * 1.734 + 50 * 1.678;
//     } else {
//       if (soDien > 100) {
//         price = (soDien - 100) * 2.014 + 50 * 1.734 + 50 * 1.678;
//       } else {
//         if (soDien > 50) {
//           price = (soDien - 50) * 1.734 + 50 * 1.678;
//         } else price = soDien * 1.678;
//       }
//     }
//   }
// }
// console.log("gia", price);

// Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N
