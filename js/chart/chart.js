import {
  numberGeneratrix,
  numberGeneratrixInPage,
  verticalLine,
  horizonLineLeft,
  horizonLineRight,
  lengthHorizonLine,
  hatching,
  slantHatching,
} from "../store/dataBasicLine.js";
import {
  drawVerticalLine,
  drawHorizonLineRight,
  drawHorizonLineLeft,
  drawHatching,
} from "../draw/drawBasicLine.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../store/dataCanvas.js";
import {
  linesChart,
  circleChart,
  textChart,
  titleChart,
  quantityTankCourse,
  distanceBetweenChart,
  dataChart,
} from "../store/dataChart.js";
import {
  drawChartLine,
  drawChartCircle,
  drawTextChart,
  drawTextTankCourse,
  drawReferencePoint,
  drawNumberGeneratrix,
  drawTitleChart,
} from "../draw/drawChart.js";

const inputTitleChart = document.querySelectorAll("[data-input-form]")[4];
const divGeneratrix = document.querySelector(".generatrix");
const selectGeneratrixInPage = document.querySelector("#generatrix-in-page");
const inputQuantityTankCourse =
  document.querySelectorAll("[data-input-form]")[0];
const inputNumberGeneratrix = document.querySelectorAll("[data-input-form]")[1];

const buttonCreateChart = document.querySelector("[data-create-chart]");

const templateCanvas = document.querySelector("#canvas-template");

let quantityCanvas = Math.ceil(
  +numberGeneratrix[0] / +numberGeneratrixInPage[0]
);

function drawChart() {
  let distanceBetweenLine = CANVAS_WIDTH / (+numberGeneratrixInPage[0] + 1);
  let distanceTextCourse =
    numberGeneratrixInPage[0] === 6
      ? CANVAS_WIDTH - (CANVAS_WIDTH - 20)
      : CANVAS_WIDTH - (CANVAS_WIDTH - 50);
  /**assigning values**/
  verticalLine.drawStart.x = distanceBetweenLine;
  verticalLine.drawEnd.x = distanceBetweenLine;
  horizonLineLeft.drawStart.x = distanceBetweenLine;
  horizonLineLeft.drawEnd.x = distanceBetweenLine - lengthHorizonLine;
  horizonLineRight.drawStart.x = distanceBetweenLine;
  horizonLineRight.drawEnd.x = distanceBetweenLine + lengthHorizonLine;
  hatching.drawStart.x = distanceBetweenLine - lengthHorizonLine;
  hatching.drawEnd.x = distanceBetweenLine - lengthHorizonLine + slantHatching;
  linesChart.drawStart.x = distanceBetweenLine;
  linesChart.drawEnd.x = distanceBetweenLine;
  circleChart.x = distanceBetweenLine;
  textChart.x = distanceBetweenLine;
  /****/

  let numberIterationForChart = 0;
  let numberIterationForChartText = 0;
  for (let i = 0; i < quantityCanvas; i++) {
    const cloneCanvasDiv = templateCanvas.content.cloneNode(true);
    const cloneCanvas = cloneCanvasDiv.querySelector(".draw-canvas");
    cloneCanvas.width = CANVAS_WIDTH;
    cloneCanvas.height = CANVAS_HEIGHT;

    /**clone data**/
    const cloneVerticalLine = JSON.parse(JSON.stringify(verticalLine));
    const cloneHorizonLineLeft = JSON.parse(JSON.stringify(horizonLineLeft));
    const cloneHorizonLineRight = JSON.parse(JSON.stringify(horizonLineRight));
    const cloneHatching = JSON.parse(JSON.stringify(hatching));
    const cloneLinesChart = JSON.parse(JSON.stringify(linesChart));
    const cloneCircleChart = JSON.parse(JSON.stringify(circleChart));
    const cloneTextChart = JSON.parse(JSON.stringify(textChart));
    const cloneTextChartForRefPoint = JSON.parse(JSON.stringify(textChart));
    const cloneTextChartForNumGeneratrix = JSON.parse(
      JSON.stringify(textChart)
    );
    /****/

    /**check**/
    let numberVerticalLine = numberGeneratrixInPage[0];
    if (
      +numberGeneratrixInPage[0] >
      +numberGeneratrix[0] - i * +numberGeneratrixInPage[0]
    ) {
      numberVerticalLine =
        +numberGeneratrix[0] - i * +numberGeneratrixInPage[0];
      distanceBetweenLine = CANVAS_WIDTH / (numberVerticalLine + 1);
      verticalLine.drawStart.x = distanceBetweenLine;
      verticalLine.drawEnd.x = distanceBetweenLine;
      horizonLineRight.drawStart.x = distanceBetweenLine;
      horizonLineRight.drawEnd.x = distanceBetweenLine + lengthHorizonLine;
      horizonLineLeft.drawStart.x = distanceBetweenLine;
      horizonLineLeft.drawEnd.x = distanceBetweenLine - lengthHorizonLine;
      hatching.drawStart.x = distanceBetweenLine - lengthHorizonLine;
      hatching.drawEnd.x =
        distanceBetweenLine - lengthHorizonLine + slantHatching;
      linesChart.drawStart.x = distanceBetweenLine;
      linesChart.drawEnd.x = distanceBetweenLine;
      circleChart.x = distanceBetweenLine;
      textChart.x = distanceBetweenLine;
      distanceTextCourse =
        distanceBetweenLine - 600 / numberGeneratrixInPage[0];
    }
    /****/

    for (let j = 0; j < numberVerticalLine; j++) {
      drawVerticalLine(cloneCanvas, cloneVerticalLine, verticalLine, j);
      drawHorizonLineRight(
        cloneCanvas,
        cloneHorizonLineRight,
        horizonLineRight,
        j
      );
      drawHorizonLineLeft(
        cloneCanvas,
        cloneHorizonLineLeft,
        horizonLineLeft,
        j
      );
      drawHatching(cloneCanvas, cloneHatching, hatching, j);
      drawChartLine(
        cloneCanvas,
        cloneLinesChart,
        linesChart,
        j,
        numberIterationForChart
      );
      drawChartCircle(
        cloneCanvas,
        cloneCircleChart,
        circleChart,
        j,
        numberIterationForChart
      );
      numberIterationForChart++;
    }
    divGeneratrix.append(cloneCanvasDiv);

    /**add text in chart**/
    const canvasAfterAppend = document.getElementsByClassName("draw-canvas");
    for (let j = 0; j < numberVerticalLine; j++) {
      drawTextChart(
        canvasAfterAppend[i],
        cloneTextChart,
        textChart,
        j,
        numberIterationForChartText
      );
      drawReferencePoint(
        canvasAfterAppend[i],
        cloneTextChartForRefPoint,
        textChart,
        j,
        numberIterationForChartText
      );
      drawNumberGeneratrix(
        canvasAfterAppend[i],
        cloneTextChartForNumGeneratrix,
        textChart,
        j,
        numberIterationForChartText
      );
      numberIterationForChartText++;
    }
    drawTextTankCourse(
      canvasAfterAppend[i],
      cloneTextChart,
      textChart,
      distanceTextCourse
    );
    drawTitleChart(canvasAfterAppend[i]);
    /****/
  }
}

buttonCreateChart.addEventListener("click", (e) => {
  e.preventDefault();
  divGeneratrix.innerHTML = ``;
  updateVariable();
  drawChart();
});

function updateVariable() {
  const inputInTable = document.getElementsByClassName("table-input");
  titleChart.splice(
    0,
    1,
    "График отклонения по образующим " + inputTitleChart.value
  );
  quantityTankCourse.splice(0, 1, inputQuantityTankCourse.value);
  numberGeneratrix.splice(0, 1, +inputNumberGeneratrix.value);
  numberGeneratrixInPage.splice(0, 1, +selectGeneratrixInPage.value);
  quantityCanvas = Math.ceil(+numberGeneratrix[0] / +numberGeneratrixInPage[0]);
  distanceBetweenChart.splice(
    0,
    1,
    +(420 - (6 / +numberGeneratrixInPage[0]) * 20)
  );
  dataChart.splice(0, dataChart.length);
  for (let i = 0; i < inputNumberGeneratrix.value; i++) {
    let result = [];
    for (let j = 0; j < inputQuantityTankCourse.value; j++) {
      const input = inputInTable[i + inputNumberGeneratrix.value * j];
      let rejection = document.getElementsByClassName("rejection")[j];
      result.push(input.value);
      rejection = rejection.textContent.split("");
      rejection = rejection.splice(1, rejection.length).join("");
      input.classList.remove("bold");
      if (Math.abs(input.value) > rejection) {
        input.classList.add("bold");
      }
    }
    dataChart.push(result);
  }
}
