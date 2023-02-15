window.onscroll = function () {
  if (window.scrollY >= 100) {
    document.getElementById("nav").style.background = "#fff";
    document.querySelectorAll("#nav a").forEach((ele) => {
      ele.style.color = "#303030";
    });

    document.getElementById("logo-light").style.display = "none";
    document.getElementById("logo-dark").style.display = "block";
    document.getElementById("arrow-top").style.display = "flex";
  } else {
    document.getElementById("nav").style.background = "transparent";
    document.querySelectorAll("#nav a").forEach((ele) => {
      ele.style.color = "#ffffffee";
    });
    document.getElementById("logo-light").style.display = "block";
    document.getElementById("logo-dark").style.display = "none";
    document.getElementById("arrow-top").style.display = "none";
  }
};

// Setting Colors

document.querySelector(".colors").onclick = function (e) {
  console.log(e.target.getAttribute("value"));
  document.documentElement.style.setProperty(
    "--main-color",
    e.target.getAttribute("value")
  );
};

//Click To Open Page Of Colors
document.getElementById("opening").onclick = function () {
  console.log(document.getElementById("settings-icon").classList);
  var set = document.getElementById("settings-icon");
  if (set.classList.contains("page-setting-close")) {
    document
      .querySelector(".close")
      .setAttribute("style", "display:block !important");
    document.querySelector(".gears").style.display = "none";
  } else {
    document.querySelector(".close").style.display = "none";
    document.querySelector(".gears").style.display = "block";
  }
  document
    .getElementById("settings-icon")
    .classList.toggle("page-setting-close");
  document.getElementById("choosing-color").classList.toggle("show");
};

// Slider Show

var quotes = [
  "Per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima. Lorem ipsum dolorum have a great day.",
  "Formas humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima et quinta decima.",
  "Humanitatis per seacula quarta decima et quinta decima. Modo typi,qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima. Modo typi quartasab.",
];
var paragraph = ["Michael Moore", "John Smith", "Britney Doe"];
var spans = ["Apple", "Microsoft", "Google"];

var index = 0;
var indexparagraph = 0;
var indexspan = 0;

document.getElementById("prev").onclick = function () {
  if (index > 0 && indexparagraph > 0 && indexspan > 0) {
    document.getElementById("quote").innerHTML =
      quotes[index-- % quotes.length];
    document.getElementById("paragraph").innerHTML =
      paragraph[indexparagraph-- % paragraph.length];
    document.getElementById("span").innerHTML =
      spans[indexspan-- % spans.length];
  }
};
document.getElementById("next").onclick = function () {
  document.getElementById("quote").innerHTML = quotes[index++ % quotes.length];
  document.getElementById("paragraph").innerHTML =
    paragraph[indexparagraph++ % paragraph.length];
  document.getElementById("span").innerHTML = spans[indexspan++ % spans.length];
};

setInterval(() => {
  document.getElementById("quote").innerHTML = quotes[index++ % quotes.length];
  document.getElementById("paragraph").innerHTML =
    paragraph[indexparagraph++ % paragraph.length];
  document.getElementById("span").innerHTML = spans[indexspan++ % spans.length];
}, 10000);

// Logos Slider

// window.onscroll = function () {
//   console.log(window.scrollX);
// };
