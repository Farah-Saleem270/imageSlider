let left = document.querySelector(".left");
let right = document.querySelector(".right");
let silder = document.querySelector(".slider");



let idx = 1;
right.addEventListener("click", () => {
    silder.style.transform = `translateX(-${idx + 800}px)`;
    idx++;
})
// right.addEventListener("click",() =>{
//     frame.style.transform =`translate(800px)`;
// })