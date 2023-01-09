import { CANVAS_HEIGHT } from "./dataCanvas.js";
import { numberGeneratrixInPage } from "./dataBasicLine.js";
import { paddingBottom } from "./dataBasicLine.js";

const REJECTION = [
  {
    name: 700,
    data: [10, 20, 30, 40, 45, 50],
  },
  {
    name: 5000,
    data: [15, 25, 35, 45, 55, 60, 65, 70, 75, 80],
  },
  {
    name: 20000,
    data: [20, 30, 40, 50, 60, 70, 75, 80, 85, 90, 90, 90],
  },
  {
    name: 50000,
    data: [30, 40, 50, 60, 70, 75, 80, 85, 90, 90, 90, 90],
  },
];

const quantityTankCourse = [];

const dataChart = [];

let titleChart = [];

const color = "black";

const styleChart = {
  width: 1,
  color: color,
};

const linesChart = {
  drawStart: {
    x: 0,
    y: CANVAS_HEIGHT - paddingBottom,
  },
  drawEnd: {
    x: 0,
    y: CANVAS_HEIGHT - paddingBottom,
  },
  style: styleChart,
};

const circleChart = {
  x: 0,
  y: CANVAS_HEIGHT - paddingBottom,
  radius: 3,
  color: color,
};

const textChart = {
  x: 0,
  y: CANVAS_HEIGHT - paddingBottom,
  color: color,
  text: "bold 7px Verdana",
  align: "right",
};

const distanceBetweenChart = [420 - (6 / numberGeneratrixInPage[0]) * 20];

export {
  dataChart,
  quantityTankCourse,
  linesChart,
  distanceBetweenChart,
  circleChart,
  textChart,
  titleChart,
  REJECTION,
};
