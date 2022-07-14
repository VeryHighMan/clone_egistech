var img_slider;
var prev_btn;
var next_btn;
var ctrl_btn;

var current_idx = 1;
var slide_width = 500;
var slide_cnt;
var slide_timing = 0.5;
var slide_timer = null;
var slide_ctrl_timer = null;
var isPlaying = true;

window.addEventListener("load", function() {
    console.log("load");
    // resize();
	document.querySelector('.content-container').style.height = window.innerHeight + 'px';

    img_slider = document.querySelector(".img_slider");
    prev_btn = document.querySelector(".prev_button");
    next_btn = document.querySelector(".next_button");
    ctrl_btn = document.querySelector(".control_button");

    bindEvt();

    slide_width = window.innerWidth;
    img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
    slide_cnt = document.querySelectorAll(".img_slider .slide").length;
});

function bindEvt() {
    prev_btn.addEventListener("click", function() {
        console.log("이전버튼");
        moveByDirection(false);
    });
    next_btn.addEventListener("click", function() {
        console.log("다음버튼");
        moveByDirection(true);
    });
    ctrl_btn.addEventListener("click", function() {
        console.log("재생버튼");
        if(isPlaying) {
            ctrl_btn.classList.remove("playing");
            isPlaying = false;
        } else {
            ctrl_btn.classList.add("playing");
            isPlaying = true;
            slide_ctrl_timer = setTimeout(function() {

            }, 3000);
        }
    });







}

function next() {
    if(slide_timer) clearTimeout(slide_timer);
    current_idx++;
    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx >= slide_cnt-1) {
        current_idx = 1;
        
        slide_timer = setTimeout(function() {
            img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
            img_slider.style.transition = "";
        }, slide_timing * 1000);
    }
}

function prev() {
    if(slide_timer) clearTimeout(slide_timer);
    current_idx--;
    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx <= 0) {
        current_idx = 3;
        
        slide_timer = setTimeout(function() {
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
    if(slide_timer) clearTimeout(slide_timer);
    if(direction) current_idx++;
    else current_idx--;

    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx >= slide_cnt-1 || current_idx <= 0) {
        if(direction) current_idx = 1;
        else current_idx = 3;

        slide_timer = setTimeout(function() {
            img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
            img_slider.style.transition = "";
        }, slide_timing * 1000);
    }
}
