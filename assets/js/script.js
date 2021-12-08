
function pink() {
    text.style.color = "pink";
}

function blue() {
    text.style.color = "blue";
}

function purple() {
    text.style.color = "purple";
}

function bold() {
    text.style.fontWeight = "bold";
}

function italic() {
    text.style.fontStyle = "italic";
}
function changeColor() {
    const color = this.getAttribute("data-color")
    text.style.color = color

}
btnPink.addEventListener("click",changeColor)