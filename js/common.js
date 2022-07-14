// const viewbase = { left: 0, top: 0, width: 1620, height: 1080, scale: 1 };
const viewbase = { left: 0, top: 0, width: 2560, height: 1200, scale: 1 };
let viewport = { left: 0, top: 0, width: 0, height: 0, scale: 1 };

window.addEventListener("resize", function() {
    // resize();
});

function resize() {
    console.log("resize");

	viewbase.width = window.innerWidth;
	viewbase.height = window.innerHeight;

	viewport.width = window.innerWidth;
	viewport.height = window.innerHeight;

	viewport.left = parseInt((viewport.width - (viewbase.width * viewport.scale))/2);
	viewport.top = parseInt((viewport.height - (viewbase.height * viewport.scale))/2);

	document.querySelector('.content-container').style.left = viewport.left + 'px';
	document.querySelector('.content-container').style.top = viewport.top + 'px';
	// document.querySelector('.content-container').style.width = viewport.width + 'px';
	// document.querySelector('.content-container').style.height = viewport.height + 'px';
	let bodyHeight = Math.round((viewbase.height*viewport.scale)+viewport.top);
	document.querySelector('body').style.height = bodyHeight+'px';
}
