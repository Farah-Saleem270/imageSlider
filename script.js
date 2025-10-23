let left = document.querySelector(".left");
let right = document.querySelector(".right");
let silder = document.querySelector(".slider");
let images = document.querySelectorAll(".image");


let length = images.length
let sliderNum = 1;

const nextSlide = () => {
        silder.style.transform = `translateX(-${sliderNum * 800}px)`;
        sliderNum++;
}

const secSlide = () => {
        silder.style.transform = `translateX(0px)`;
        sliderNum = 1;
}

right.addEventListener("click", () => {
        sliderNum < length ?  nextSlide() : secSlide();
})


const prevSlide = () => {
        silder.style.transform = `translateX(-${(sliderNum-2)*800}px)`;
        sliderNum--;
}

const lastSlide = () => {
        silder.style.transform = `translateX(-${(length-1)*800}px)`;
        sliderNum = length;
}

left.addEventListener("click", () => {
        sliderNum > 1 ?  prevSlide() : lastSlide();
})
