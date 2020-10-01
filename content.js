// Add new colors here
let colors = [
  "#0B68FA",
  "#93C2DB",
  "#FF8AE2",
];

function getRandomInt() {
  max = colors.length;
  return Math.floor(Math.random() * (max - 0) + 0);
}

let header = document.getElementsByTagName("header")[0];

let nav = header.getElementsByTagName("nav")[0];

let hacktoberfestElement = document.createElement("a");

hacktoberfestElement.className =
  "js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15";

hacktoberfestElement.innerHTML = "Hacktoberfest!";

hacktoberfestElement.style.color = colors[getRandomInt()];

hacktoberfestElement.href =
  "https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest";

nav.appendChild(hacktoberfestElement);
