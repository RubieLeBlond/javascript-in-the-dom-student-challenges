// assign the correct element to the variable
// 🦉 This can be solved in more than one way. You decide which you prefer!
// querySelector examples: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#examples
// getElementById examples: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById#examples

const buttonElem = ;

buttonElem.addEventListener("click", () => {
  const oldText = buttonElem.innerText;
  return (button.innerText = oldText === "ON" ? "OFF" : "ON");
});
