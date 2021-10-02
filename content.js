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
hacktoberfestElement.href =
  "https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest";

let action = document.createElement("a");
action.className = "js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15";
action.innerHTML = "assigned?";
action.style.color = foregroundColor;
action.addEventListener('mouseenter', function () { action.style.color = rgba() });
action.addEventListener('mouseleave', function () { action.style.color = foregroundColor });
action.href = "https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest+no%3Aassignee";

nav.appendChild(hacktoberfestElement);
nav.appendChild(action);
