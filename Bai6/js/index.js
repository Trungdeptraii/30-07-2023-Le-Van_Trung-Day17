document.write(
  `<h2>Học viên sử dụng kiến thức đã học về vòng lặp, câu lệnh rẽ nhánh để vẽ bàn cờ vua</h2>`
);
document.write(`<br>`);

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
  document.write(`<h3>${row}</h3>`);
}
