let container = document.querySelector(".sub-container");
let container_g = document.querySelector(".container");
let btn = document.getElementById("spin");
let btn_prev = document.getElementById("spin-prev");

let btn_g = document.getElementById("spin-g");
let btn_prev_g = document.getElementById("spin-prev-g");
let number = 0;
let number_g = 0;

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(10);
}


btn_prev.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number -= Math.ceil(10);
}


btn_g.onclick = function () {
	container_g.style.transform = "rotate(" + number_g + "deg)";
	number_g += Math.ceil(1);
}

btn_prev_g.onclick = function () {
	container_g.style.transform = "rotate(" + number_g + "deg)";
	number_g -= Math.ceil(1);
}