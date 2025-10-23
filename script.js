let left = document.querySelector(".left");
let right = document.querySelector(".right");
let silder = document.querySelector(".slider");
let images = document.querySelectorAll(".image");



let sliderNum = 1;
right.addEventListener("click", () => {
        if (sliderNum < images.length) {
                silder.style.transform = `translateX(-${sliderNum * 800}px)`;
                sliderNum++;
        } else {
                silder.style.transform = `translateX(0px)`;
                sliderNum = 1;
        }
})

