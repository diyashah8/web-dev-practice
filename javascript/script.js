
document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementsById("Hello")
    body.addEventListener("click", () => {
        body.style.color = body.style.color === "red" ? "red" : "black";
    });
});
