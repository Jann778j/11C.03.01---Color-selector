"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  // console.log("starter her");

  document.querySelector("input").addEventListener("input", visFarveHer);
}

// denne function skal indeholde alle variabler
function visFarveHer() {
  console.log("vis farver her functionene");
  const input = document.querySelector("input");
  //her laver jeg variabler
  const hex = hentInputHer(input.value);
  const rgb = changeHexToRgb(hex);
  const hsl = changeRgbToHsl(input.value);

  // her kalder jeg mine functioner og (hex) tager ders parameter med
  visHex(hex);
  visRGB(rgb);
  visHSL(hsl);
}

//henter input og retunere det
function hentInputHer() {
  const input = document.querySelector("input").value;
  return input;
}

// konverterer hex til rgb og retunere rgb indholdet
function changeHexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

// konverterer rgb til hsl (ved hjælp af lærenes kode) og retunere hsl indholdet - virker ikke (ved ikke hvorfor)
function changeRgbToHsl(rgb) {
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

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

  // h = Math.round(h);
  // s = Math.round(s);
  // l = Math.round(l);

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

  return { h, s, l };
}

// viser hex kode i div
function visHex(hex) {
  document.querySelector("#hexcode").textContent = "Hex: " + hex;
  document.querySelector("#color").style.backgroundColor = `${hex}`;
}

// viser rgb kode i div
function visRGB(rgb) {
  document.querySelector(
    "#rgb"
  ).textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

// burde vise hsl kode i div men den kan ikke finde værdier?!?!?
function visHSL(hsl) {
  document.querySelector(
    "#hsl"
  ).textContent = `HSL: ${hsl.h}, ${hsl.s}%, ${hsl.s}%`;
}
