const sliderContainer = document.querySelector(".slider__container");
const sliderBox = document.querySelector(".slider__boxs");
const sliderItems = document.querySelectorAll(".slider__boxs img");
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const slideCounter = document.querySelector(".active");
const slideAll = document.querySelector(".all");
let count = 0
slideAll.textContent = "0"+sliderItems.length
nextBtn.addEventListener("click", () => {
    count++;
    changeItem();
})
prevBtn.addEventListener("click", () => {
    count--;
    changeItem();
})

function changeItem() {
    if (count >= sliderItems.length) {
        count = 0;
    } else if (count < 0) {
        count = sliderItems.length-1
    }
    console.log(count);
    slideCounter.textContent = "0"+(count + 1)
    sliderBox.style.transform = `translateX(${-count*sliderContainer.clientWidth}px)`;
}

let autoChange = setInterval(()=>{
    count++;
    changeItem();
},3800)