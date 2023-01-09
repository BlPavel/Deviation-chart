import { REJECTION } from "../store/dataChart.js";

const buttonCreateTable = document.querySelector("[data-create-table]");
const dataForCreateTable = document.querySelectorAll("[data-input-form]");
const divTable = document.querySelector(".table");

buttonCreateTable.addEventListener("click", (e) => {
  e.preventDefault();
  let error = false;
  for (let i = 0; i < dataForCreateTable.length; i++) {
    if (!dataForCreateTable[i].value.trim()) {
      error = true;
    }
  }
  if (error) {
    alert("Заполните все поля");
  } else {
    divTable.innerHTML = ``;
    const table = document.createElement("table");
    table.append(renderBodyTable());
    divTable.append(table);
  }
});

function renderBodyTable(inputValue) {
  const tBody = document.createElement("tbody");
  tBody.append(
    createHeadTable(),
    createNumberGeneratrix(),
    createTitleGeneratrix()
  );
  const indexRejection =
    dataForCreateTable[2].value <= 700
      ? 0
      : dataForCreateTable[2].value <= 5000
      ? 1
      : dataForCreateTable[2].value <= 20000
      ? 2
      : 3;
  const coefRejection =
    new Date().getFullYear() - dataForCreateTable[3].value < 5
      ? 1
      : new Date().getFullYear() - dataForCreateTable[3].value < 20
      ? 1.3
      : 2;
  let numberIteration = 0;
  for (let i = 0; i < dataForCreateTable[0].value; i++) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${i + 1}</td>
        `;
    for (let j = 0; j < dataForCreateTable[1].value; j++) {
      tr.append(createTd(numberIteration, inputValue));
      numberIteration++;
    }
    const lastTd = document.createElement("td");
    lastTd.classList.add("rejection");
    lastTd.innerText = "±" + REJECTION[indexRejection].data[i] * coefRejection;
    tr.append(lastTd);
    tBody.append(tr);
  }
  return tBody;
}

function createHeadTable() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td rowspan="3" class="big-font">Пояс</td>
    <td colspan="${dataForCreateTable[1].value}" class="big-font">Образующие</td>
    <td rowspan="3" class="big-font">Предельные отклонения, мм</td>
    `;
  return tr;
}

function createNumberGeneratrix() {
  const tr = document.createElement("tr");
  for (let i = 0; i < dataForCreateTable[1].value; i++) {
    const td = document.createElement("td");
    td.innerText = i + 1;
    tr.append(td);
  }
  return tr;
}

function createTitleGeneratrix() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td colspan="${dataForCreateTable[1].value}" class="big-font">Отклонения образующих от вертикали, мм</td>
    `;
  return tr;
}

function createTd(numberIteration, inputValue) {
  const td = document.createElement("td");
  if (inputValue) {
    if (inputValue[numberIteration].value <= 0) {
      td.innerText = inputValue[numberIteration].value;
    } else {
      td.innerText = "+" + inputValue[numberIteration].value;
    }
  } else {
    td.innerHTML = `
        <td><input type="number" step="1" class="table-input"></td>
    `;
  }
  return td;
}

export { renderBodyTable };
