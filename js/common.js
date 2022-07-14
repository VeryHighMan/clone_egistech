window.addEventListener("resize", function() {
    resize();
});

function resize() {
    console.log("resize");

	slide_width = window.innerWidth;
	img_slider.style.transform = `translate(${-slide_width}px, 0px)`;
	img_slider.style.transition = "";

}

