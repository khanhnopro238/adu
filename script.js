const run = () => {
	document.querySelector("#texts").classList.add("active");
	document
		.querySelector("#texts span:last-child")
		.addEventListener("animationend", () => {
			document.querySelector("#svg").classList.add("active", "loaded");
		});
};
document.addEventListener("DOMContentLoaded", () => {
	run();
});

document.querySelector(".btn-reset").onclick = () => {
	document.querySelector("#texts").classList.remove("active");
	document.querySelector("#svg").classList.remove("active", "loaded");
	document.querySelector("#texts").style.animation = "none";
	document.querySelector("#texts").offsetHeight;
	document.querySelector("#texts").style.animation = null;
	run();
};
