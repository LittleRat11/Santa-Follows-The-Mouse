const myDiv = document.querySelector("#my-div");

function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false
    }
}
let x, y;
const move = (e) => {
    try {
        x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}
    myDiv.style.left = x - 160 + "px";
    myDiv.style.top = y - 160 + "px";
}

document.addEventListener("mousemove", (e) => {
    move(e)
})

document.addEventListener("touchmove", (e) => {
    move(e)
})