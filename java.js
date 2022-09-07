"use strict";

window.addEventListener("DOMContentLoaded", init);

const input = document.querySelector("input");

function init() {
  console.log("starter her");

  input.addEventListener("input", hentInputHer);
  hentInputHer(input);
}

function hentInputHer(input) {
  input = document.querySelector("input");

  let hexColor = input.value;

  document.querySelector("#color").style.backgroundColor = `${hexColor}`;

  document.querySelector("#hexcode").textContent = "HEX HERE: " + hexColor;

  changeToRGB(hexColor);
}

function changeToRGB(hexColor) {
  let r = parseInt(hexColor.substring(1, 3), 16);
  let g = parseInt(hexColor.substring(3, 5), 16);
  let b = parseInt(hexColor.substring(5, 7), 16);

  // write out the values for RGB...
  const rgbOutput = `RGB: (${r}, ${g}, ${b})`;
  // .. and place it into html
  document.querySelector("#rgb").textContent = rgbOutput;

  changeToHSL(r, g, b);
}

function changeToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

  let hslOutput = `HSL: (${Math.round(h)}, ${Math.round(s)}, ${Math.round(l)})`;
  document.querySelector("#hsl").textContent = hslOutput;
}
