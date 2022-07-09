var img_slider;
var current_idx = 1;
var slide_width = 500;
var slide_cnt;
var slide_timing = 0.5;
//타이머 추가하기
//next랑 prev통합하기

window.addEventListener("load", function() {
    console.log("load");

    img_slider = document.querySelector(".img_slider");
    slide_width = window.innerWidth;
    img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
    slide_cnt = document.querySelectorAll(".img_slider .img").length;
});

function next() {
    current_idx++;
    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx >= slide_cnt-1) {
        current_idx = 1;
        
        setTimeout(function() {
            img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
            img_slider.style.transition = "";
        }, slide_timing * 1000);
    }
}

function prev() {
    current_idx--;
    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx <= 0) {
        current_idx = 3;
        
        setTimeout(function() {
            img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
            img_slider.style.transition = "";
        }, slide_timing * 1000);
    }
}

