import { CANVAS_HEIGHT } from "./dataCanvas.js";

const numberGeneratrix = [];

const numberGeneratrixInPage = [];

const paddingBottom = 20;

const paddingTop = 100;

const styleBasicLine = {
  width: 2,
  color: "black",
};

const verticalLine = {
  drawStart: {
    x: 0,
    y: paddingTop,
  },
  drawEnd: {
    x: 0,
    y: CANVAS_HEIGHT - paddingBottom,
  },
  style: styleBasicLine,
};

const horizonLineLeft = {
  drawStart: {
    x: 0,
    y: CANVAS_HEIGHT - paddingBottom,
  },
  drawEnd: {
    x: 0,
    y: CANVAS_HEIGHT - paddingBottom,
  },
  style: styleBasicLine,
};

const horizonLineRight = {
  drawStart: {
    x: 0,
    y: CANVAS_HEIGHT - paddingBottom,
  },
  drawEnd: {
    x: 0,
    y: CANVAS_HEIGHT - paddingBottom,
  },
  style: styleBasicLine,
};

const lengthHorizonLine = 30;

const slantHatching = -10;

const styleHatching = {
  width: 1,
  color: "black",
};

const hatching = {
  drawStart: {
    x: 0,
    y: CANVAS_HEIGHT - paddingBottom,
  },
  drawEnd: {
    x: slantHatching,
    y: CANVAS_HEIGHT - paddingBottom + 10,
  },
  style: styleHatching,
};

const stepHatching = 10; ////depends by lengthHorizonLine

export {
  numberGeneratrix,
  numberGeneratrixInPage,
  verticalLine,
  horizonLineLeft,
  horizonLineRight,
  lengthHorizonLine,
  hatching,
  slantHatching,
  stepHatching,
  paddingBottom,
  paddingTop,
};
