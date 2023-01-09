import {
  dataChart,
  quantityTankCourse,
  distanceBetweenChart,
  circleChart,
  titleChart,
  textChart,
} from "../store/dataChart.js";
import { drawLine, drawCircle, drawText } from "./drawElement.js";
import { verticalLine, paddingBottom } from "../store/dataBasicLine.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../store/dataCanvas.js";
import { numberGeneratrixInPage, paddingTop } from "../store/dataBasicLine.js";

function drawChartLine(
  canvas,
  cloneLinesChart,
  linesChart,
  j,
  numberIterationForChart
) {
  for (let k = 0; k < quantityTankCourse[0]; k++) {
    if (k === 0) {
      cloneLinesChart.drawStart.x = linesChart.drawStart.x * (j + 1);
      cloneLinesChart.drawStart.y = linesChart.drawStart.y;
      cloneLinesChart.drawEnd.x =
        linesChart.drawEnd.x * (j + 1) +
        dataChart[numberIterationForChart][k] *
          countCoefX(numberIterationForChart);
      cloneLinesChart.drawEnd.y = linesChart.drawEnd.y - countStepY();
    } else {
      cloneLinesChart.drawStart.x =
        linesChart.drawStart.x * (j + 1) +
        dataChart[numberIterationForChart][k - 1] *
          countCoefX(numberIterationForChart);
      cloneLinesChart.drawStart.y = linesChart.drawStart.y - countStepY() * k;
      cloneLinesChart.drawEnd.x =
        linesChart.drawEnd.x * (j + 1) +
        dataChart[numberIterationForChart][k] *
          countCoefX(numberIterationForChart);
      cloneLinesChart.drawEnd.y = linesChart.drawEnd.y - countStepY() * (k + 1);
    }
    drawLine(canvas, cloneLinesChart);
  }
}

function drawChartCircle(
  canvas,
  cloneCircleChart,
  circleChart,
  j,
  numberIterationForChart
) {
  for (let k = 0; k < quantityTankCourse[0]; k++) {
    cloneCircleChart.x =
      circleChart.x * (j + 1) +
      dataChart[numberIterationForChart][k] *
        countCoefX(numberIterationForChart);
    cloneCircleChart.y = circleChart.y - countStepY() * (k + 1);
    drawCircle(canvas, cloneCircleChart);
  }
}

function drawTextChart(
  canvas,
  cloneTextChart,
  textChart,
  j,
  numberIterationForChartText
) {
  for (let k = 0; k < quantityTankCourse[0]; k++) {
    let textForAdd;
    if (dataChart[numberIterationForChartText][k] <= 0) {
      cloneTextChart.x =
        textChart.x * (j + 1) +
        dataChart[numberIterationForChartText][k] *
          countCoefX(numberIterationForChartText) -
        circleChart.radius -
        4;
      cloneTextChart.y =
        textChart.y - countStepY() * (k + 1) + circleChart.radius / 2 - 1;
      cloneTextChart.align = "right";
      textForAdd = dataChart[numberIterationForChartText][k];
    } else {
      cloneTextChart.x =
        textChart.x * (j + 1) +
        dataChart[numberIterationForChartText][k] *
          countCoefX(numberIterationForChartText) +
        circleChart.radius / 2 +
        4;
      cloneTextChart.y =
        textChart.y - countStepY() * (k + 1) + circleChart.radius / 2 - 1;
      cloneTextChart.align = "left";
      textForAdd = "+" + dataChart[numberIterationForChartText][k];
    }
    drawText(canvas, cloneTextChart, textForAdd);
  }
}

function drawTextTankCourse(canvas, cloneTextChart, textChart, distance) {
  cloneTextChart.x = distance;
  cloneTextChart.text = "10px Verdana";
  cloneTextChart.aligh = "left";
  for (let k = 0; k < quantityTankCourse[0]; k++) {
    cloneTextChart.y = textChart.y - countStepY() * (k + 1);
    drawText(canvas, cloneTextChart, `пояс ${k + 1}`);
  }
}

function countCoefX(numberIterationForChart) {
  const absDataChart = dataChart[numberIterationForChart].map((item) => {
    return Math.abs(item);
  });
  const maxInDataChart = Math.max(...absDataChart);
  const coefForAxisX =
    (CANVAS_WIDTH - +distanceBetweenChart[0]) /
    (numberGeneratrixInPage[0] + 1) /
    maxInDataChart /
    2;
  return coefForAxisX;
}

function countStepY() {
  const stepByAxisY =
    (verticalLine.drawEnd.y - verticalLine.drawStart.y) / quantityTankCourse[0];
  return stepByAxisY;
}

function drawReferencePoint(
  canvas,
  cloneTextChart,
  textChart,
  j,
  numberIterationForChartText
) {
  cloneTextChart.text = "bold 10px Verdana";
  cloneTextChart.y = CANVAS_HEIGHT - paddingBottom - 3;
  if (dataChart[numberIterationForChartText][0] >= 0) {
    cloneTextChart.x = textChart.x * (j + 1) - 4;
  } else {
    cloneTextChart.x = textChart.x * (j + 1) + 10;
  }
  drawText(canvas, cloneTextChart, "0");
}

function drawNumberGeneratrix(
  canvas,
  cloneTextChart,
  textChart,
  j,
  numberIterationForChartText
) {
  cloneTextChart.text = "10px Verdana";
  cloneTextChart.align = "center";
  cloneTextChart.x = textChart.x * (j + 1);
  cloneTextChart.y = paddingTop - 20;
  drawText(
    canvas,
    cloneTextChart,
    `Образующая № ${numberIterationForChartText + 1}`
  );
}

function drawTitleChart(canvas) {
  const cloneTextChart = JSON.parse(JSON.stringify(textChart));
  cloneTextChart.text = "12px Verdana";
  cloneTextChart.align = "center";
  cloneTextChart.x = CANVAS_WIDTH / 2;
  cloneTextChart.y = paddingTop - 60;
  drawText(canvas, cloneTextChart, ...titleChart);
}

export {
  drawChartLine,
  drawChartCircle,
  drawTextChart,
  drawTextTankCourse,
  drawReferencePoint,
  drawNumberGeneratrix,
  drawTitleChart,
};
