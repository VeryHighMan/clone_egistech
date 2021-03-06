var img_slider;
var prev_btn;
var next_btn;
var ctrl_btn;
var menus;
var nav_sliders;

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
    menus = document.querySelectorAll(".menu > div");
    nav_sliders = document.querySelectorAll(".nav_slider > div");

    bindEvt();

    slide_ctrl_timer = setInterval(function() {
        moveByDirection(true);
    }, 3000);

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
            if(slide_ctrl_timer) clearInterval(slide_ctrl_timer);
        } else {
            ctrl_btn.classList.add("playing");
            isPlaying = true;
            slide_ctrl_timer = setInterval(function() {
                moveByDirection(true);
            }, 3000);
        }
    });

    nav_sliders.forEach((el, idx) => {
        el.addEventListener("click", function() {
            moveByIndex(idx);
            setNavSlider(idx);
        });
    });

    menus.forEach((el, idx) => {
        el.addEventListener("mouseover", function() {
            el.classList.add("on");

        });
        el.addEventListener("mouseleave", function() {
            el.classList.remove("on");

        });
    });
}

function play() {
    ctrl_btn.classList.add("playing");
    isPlaying = true;
    slide_ctrl_timer = setInterval(function() {
        moveByDirection(true);
    }, 3000);
}
function pause() {
    ctrl_btn.classList.remove("playing");
    isPlaying = false;
    if(slide_ctrl_timer) clearInterval(slide_ctrl_timer);
}

/**
 * 슬라이드 방향 지정 이동
 * @param {boolean} direction true 오른쪽 false 왼쪽 
*/
function moveByDirection(direction) {
    console.log(current_idx);
    if(slide_timer) clearTimeout(slide_timer);
    pause();
    if(direction) current_idx++;
    else current_idx--;

    var x = current_idx * slide_width * -1;
    img_slider.style.transform = `translate(${x}px, 0px)`;
    img_slider.style.transition = `${slide_timing}s ease-out`;
    
    if(current_idx >= slide_cnt - 1 || current_idx <= 0) {
        if(direction) current_idx = 1;
        else current_idx = 3;

        slide_timer = setTimeout(function() {
            img_slider.style.transform = `translate(${slide_width * current_idx * -1}px, 0px)`;
            img_slider.style.transition = "";
        }, slide_timing * 1000);
    }
    setNavSlider(current_idx - 1);
}

/**
 * 인덱스 지정 이동
 * @param {number} idx
*/
function moveByIndex(idx) {
    if(slide_timer) clearTimeout(slide_timer);
    pause();
    if(current_idx > idx + 1) {
        current_idx = idx + 2;
        moveByDirection(false);
    } else {
        current_idx = idx;
        moveByDirection(true);
    }


}

function setNavSlider(slide_idx) {
    nav_sliders.forEach((el, idx) => {
        if(slide_idx == idx) el.classList.add("focus");
        else el.classList.remove("focus");
    });
}

