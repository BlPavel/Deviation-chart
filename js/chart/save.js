import { renderBodyTable } from "../dom/render-table.js";

const buttonSave = document.querySelector("[data-save]");

buttonSave.addEventListener("click", (e) => {
  e.preventDefault();
  const canvas = document.getElementsByClassName("draw-canvas");
  renderTable();
  saveTableInExcel();
  deleteTable();
  for (let i = 0; i < canvas.length; i++) {
    saveCanvasAsImg(canvas[i]);
  }
});

function saveCanvasAsImg(canvas) {
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", "График отклонения.png");
  let dataURL = canvas.toDataURL("image/png");
  let url = dataURL.replace(
    /^data:image\/png/,
    "data:application/octet-stream"
  );
  downloadLink.setAttribute("href", url);
  downloadLink.click();
}

function renderTable() {
  const table = document.createElement("table");
  const inputInTable = document.getElementsByClassName("table-input");
  table.append(renderBodyTable(inputInTable));
  table.classList.add("table-for-save");
  document.body.append(table);
}

function deleteTable() {
  const table = document.getElementsByClassName("table-for-save")[0];
  table.remove();
}
