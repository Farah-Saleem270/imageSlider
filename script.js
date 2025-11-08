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
        sliderNum < length ? nextSlide() : secSlide();
        changeColor();

})


const prevSlide = () => {
        silder.style.transform = `translateX(-${(sliderNum - 2) * 800}px)`;
        sliderNum--;
}

const lastSlide = () => {
        silder.style.transform = `translateX(-${(length - 1) * 800}px)`;
        sliderNum = length;
}

left.addEventListener("click", () => {
        sliderNum > 1 ? prevSlide() : lastSlide();
        changeColor();

})



//start for dots

const buttom = document.querySelector(".buttom");

for (let i = 0; i < length; i++) {
        const div = document.createElement("div");
        div.className = "button";
        buttom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");


buttons[0].style.backgroundColor = "white";

const resetbg = () => {
        buttons.forEach((button) => {
                button.style.backgroundColor = "transparent";
                button.addEventListener("mouseover", stopSliderShow);
                button.addEventListener("mouseout", startSlideShow);
        })
}

buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
                silder.style.transform = `translateX(-${i * 800}px)`;
                resetbg();
                button.style.backgroundColor = "white";
        })
})


const changeColor = () => {
        resetbg();
        buttons[sliderNum - 1].style.backgroundColor = "white";
}

//end dots


//Start Auto Slider

let sliderInterval;

const startSlideShow = () => {
        sliderInterval = setInterval(() => {
                sliderNum < length ? nextSlide() : secSlide();
                changeColor();
        }, 2000)
}

startSlideShow();

const stopSliderShow = () => {
        clearInterval(sliderInterval);
}

silder.addEventListener("mouseover", stopSliderShow);
silder.addEventListener("mouseout", startSlideShow);
right.addEventListener("mouseover", stopSliderShow);
right.addEventListener("mouseout", startSlideShow);
left.addEventListener("mouseover", stopSliderShow);
left.addEventListener("mouseout", startSlideShow);