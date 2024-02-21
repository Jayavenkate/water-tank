const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const resultDiv = document.querySelector(".result-container");
const tableContainer = document.querySelector(".table-container");

input.addEventListener("input", () => {
  //validate

  input.value = input.value.replace(/[^0-9,]/g, "");
});

btn.addEventListener("click", () => {
  let inputValue = input.value.split(",").map(Number);
  let result = [];
  let wall = 0;
  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i + 1] !== undefined && inputValue[i] === 0) {
      result[i] = wall;
    }
    if (inputValue[i] !== 0) {
      if (inputValue[i] > wall) {
        wall = inputValue[i];
      }
      result[i] = 0;
    }
  }
  let units = result.reduce((acc, cv) => acc + cv);
  resultDiv.textContent = "water in tank:" + `${units}unit`;

  //table

  let tableHTML = `<table style="width:${result.length * 40}px; height:${
    result.length * 40
  }px;">`;
  for (let i = 0; i < 10; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < result.length; j++) {
      if (j < result.length && 10 - i <= result[j]) {
        tableHTML += `<td style="background-color:aqua;"></td>`;
      } else {
        tableHTML += "<td></td>";
      }
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";
  tableContainer.innerHTML = tableHTML;
});
