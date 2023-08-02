document.write(
  `<h1>Học viên sử dụng kiến thức đã học để vẽ bảng cửu chương từ 1 đến 10</h1>`
);
document.write(`<hr>`);

for (let i = 1; i <= 10; i++) {
  document.write(`<span>Bảng cửu chương số ${i}</span>`);
  document.write(`<br>`);
  for (j = 1; j <= 10; j++) {
    document.write(`<span>${i} x ${j} = ${i * j}</span>`);
    document.write(`<br>`);
  }
  // document.write(`<span>------------------</span>`);
  document.write(`<br>`);
}
