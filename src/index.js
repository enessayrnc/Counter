import { createElement } from "ardelon-create-element";
import "./assets/style/style.scss";

const container = createElement({
    classList: ["container"],
});
const buttonContainer = createElement({
    classList: ["button-container"],
});
const label = createElement({
    id: "label",
    classList: ["label"],
    innerText: "0",
});
const arttir = createElement({
    type: "button",
    innerText: "+",
    classList: ["button-success"],
});
const azalt = createElement({
    type: "button",
    innerText: "-",
    classList: ["button-error"],
});
const sifirla = createElement({
    type: "button",
    innerText: "SIFIRLA",
    classList: ["button-reset"],
});

const increase = (a) => {
    let number = label.innerText;
    number++;
    label.innerText = number;
};
const decrease = (a) => {
    let number = label.innerText;
    number--;
    label.innerText = number;
};
const reset = (a) => {
    label.innerText = "0";
};
sifirla.addEventListener("click", reset);
azalt.addEventListener("click", decrease);
arttir.addEventListener("click", increase);
buttonContainer.append(azalt, sifirla, arttir);
container.append(label, buttonContainer);
document.body.append(container);