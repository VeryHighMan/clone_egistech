var img_slider;
var prev_btn;
var next_btn;
var ctrl_btn;

var current_idx = 1;
var slide_width = 500;
var slide_cnt;
var slide_timing = 0.5;
var timer = null;
//next랑 prev통합하기

window.addEventListener("load", function() {
    console.log("load");

    img_slider = document.querySelector(".img_slider");
    prev_btn = document.querySelector(".prev_button");
    next_btn = document.querySelector(".next_button");
    ctrl_btn = document.querySelector(".next_button");

    slide_width = window.innerWidth;
    img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
    slide_cnt = document.querySelectorAll(".img_slider .slide").length;
});

function next() {
    if(timer) clearTimeout(timer);
    current_idx++;
    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx >= slide_cnt-1) {
        current_idx = 1;
        
        timer = setTimeout(function() {
            img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
            img_slider.style.transition = "";
        }, slide_timing * 1000);
    }
}

function prev() {
    if(timer) clearTimeout(timer);
    current_idx--;
    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx <= 0) {
        current_idx = 3;
        
        timer = setTimeout(function() {
            img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
            img_slider.style.transition = "";
        }, slide_timing * 1000);
    }
}

/**
 * 슬라이드 방향 지정 이동
 * @param {boolean} direction true 오른쪽 false 왼쪽 
*/
function moveByDirection(direction) {
    if(timer) clearTimeout(timer);
    if(direction) current_idx++;
    else current_idx--;

    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx >= slide_cnt-1 || current_idx <= 0) {
        if(direction) current_idx = 1;
        else current_idx = 3;

        timer = setTimeout(function() {
            img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
            img_slider.style.transition = "";
        }, slide_timing * 1000);
    }
}
