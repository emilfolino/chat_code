(function IIFE() {
    let button = document.getElementById("btn");
    let root = document.getElementById("roots");

    button.addEventListener("click", handleClick());
})();

function handleClick(event) {
    console.log(event.target);

    let newText = document.createElement("p");

    newText.textContent = "Button Clicked!";
    root.appendChild(newText);
}
