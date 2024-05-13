
let number = document.getElementById("number");
let degBtn = document.getElementById("degrees");
let incBtn = document.getElementById("increas");
let reserBtn = document.querySelector(".reset");

let count = 0;

incBtn.addEventListener("click", () => {
    count++;
    number.innerHTML = count;
})
degBtn.addEventListener("click", () => {
    if (count > 0) {
        count--
        number.innerHTML = count;
    }
})

reserBtn.addEventListener("click", () => {
    if (count > 0) {
        count = 0
        number.innerHTML = count
    }
})