// Add new colors here
/*
let colors = [
  "#0B68FA",
  "#93C2DB",
  "#FF8AE2",
  "#AFF8DB",
  "#ECD5E3",
  "#FFD8BE",
  "#61B054",
  "#FFDE5C",
  "#CA9BF7",
  "#FFB7CE",
  "#FF9899",
  "#BEFD73",
  "#BEE7A5",
  "#9ADEDB",
  "#99C5C4",
  "#FCBAB1",
  "#F6EEDF",
  "#E7E1C9",
  "#D1CEBD",
  "#A1C1AD",
  "#58949C",
  "#ECE6D2",
  "#F2D7B4",
  "#DF9881",
];
*/

let foregroundColor = "#FFF"

// all the colors 
function rgba() {
  o = Math.round,
    r = Math.random,
    s = 255;
  return ("rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + 0.8 + ")");
}

let header = document.getElementsByTagName("header")[0];

let nav = header.getElementsByTagName("nav")[0];

let hacktoberfestElement = document.createElement("a");

hacktoberfestElement.className =
  "js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15";

hacktoberfestElement.innerHTML = "Hacktoberfest!";

hacktoberfestElement.style.color = foregroundColor;

hacktoberfestElement.addEventListener('mouseenter', function () { hacktoberfestElement.style.color = rgba() });

hacktoberfestElement.addEventListener('mouseleave', function () { hacktoberfestElement.style.color = foregroundColor });

// hacktoberfestElement.href =
//   "https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest";


// much nicer query
hacktoberfestElement.href =
  "https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest+no%3Aassignee";

nav.appendChild(hacktoberfestElement);

