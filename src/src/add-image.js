import Kiwi from "./kiwi.jpg";

function addImage() {
    const body = document.querySelector("body");
    const img = document.createElement("img");

    img.alt = "Kiwi";
    img.width = 300;
    img.src = Kiwi;

    body.appendChild(img);
}

export default addImage;
