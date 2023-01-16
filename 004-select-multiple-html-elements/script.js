// assign the correct element to the variable
// 🦉 This will help. Again there is more than one solution...
// https://gomakethings.com/getting-direct-descendant-elements-by-selector-with-vanilla-js/

const wrapperElem = document.querySelector("#wrapper");

const buttonElem = ;
const inputElem = ;

buttonElem.addEventListener("click", () => {
  const oldText = inputElem.value;
  return (inputElem.value = oldText === "ON" ? "OFF" : "ON");
});
