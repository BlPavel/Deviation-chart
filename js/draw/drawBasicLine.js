import { drawLine } from "./drawElement.js";
import {
  lengthHorizonLine,
  slantHatching,
  stepHatching,
} from "../store/dataBasicLine.js";

function drawVerticalLine(canvas, cloneVerticalLine, verticalLine, j) {
  (cloneVerticalLine.drawStart.x = verticalLine.drawStart.x * (j + 1)),
    (cloneVerticalLine.drawEnd.x = verticalLine.drawEnd.x * (j + 1));
  drawLine(canvas, cloneVerticalLine);
}

function drawHorizonLineRight(canvas, cloneHorizonLine, horizonLine, j) {
  if (j === 0) {
    (cloneHorizonLine.drawStart.x = horizonLine.drawStart.x * (j + 1)),
      (cloneHorizonLine.drawEnd.x = horizonLine.drawEnd.x * (j + 1));
  } else {
    (cloneHorizonLine.drawStart.x = horizonLine.drawStart.x * (j + 1)),
      (cloneHorizonLine.drawEnd.x =
        horizonLine.drawEnd.x * (j + 1) - lengthHorizonLine * j);
  }
  drawLine(canvas, cloneHorizonLine);
}

function drawHorizonLineLeft(canvas, cloneHorizonLine, horizonLine, j) {
  if (j === 0) {
    (cloneHorizonLine.drawStart.x = horizonLine.drawStart.x * (j + 1)),
      (cloneHorizonLine.drawEnd.x = horizonLine.drawEnd.x * (j + 1));
  } else {
    (cloneHorizonLine.drawStart.x = horizonLine.drawStart.x * (j + 1)),
      (cloneHorizonLine.drawEnd.x =
        horizonLine.drawEnd.x * (j + 1) + lengthHorizonLine * j);
  }
  drawLine(canvas, cloneHorizonLine);
}

function drawHatching(canvas, cloneHatching, hatching, j) {
  for (let i = 0; i < lengthHorizonLine * 2 + stepHatching; i += stepHatching) {
    if (j === 0) {
      (cloneHatching.drawStart.x = hatching.drawStart.x * (j + 1) + i),
        (cloneHatching.drawEnd.x = hatching.drawEnd.x * (j + 1) + i);
    } else {
      (cloneHatching.drawStart.x =
        hatching.drawStart.x * (j + 1) + lengthHorizonLine * j + i),
        (cloneHatching.drawEnd.x =
          hatching.drawEnd.x * (j + 1) +
          lengthHorizonLine * j -
          slantHatching * j +
          i);
    }
    drawLine(canvas, cloneHatching);
  }
}

export {
  drawVerticalLine,
  drawHorizonLineRight,
  drawHorizonLineLeft,
  drawHatching,
};
