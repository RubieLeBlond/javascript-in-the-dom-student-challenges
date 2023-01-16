// 🤓 Nothing to see here! All code changes are needed in index.html

const element = document.querySelector("#element");

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? "darkolivegreen" : "darkred";
};
