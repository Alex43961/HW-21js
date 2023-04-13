'use strict'

let list = document.getElementById("list");
let btnSave = document.getElementById("btnSave");
let textarea = document.getElementById("textarea");

let text;
let counter = 1;


let createElement = () => {
	let li = document.createElement('li');

	li.textContent = text;
	list.insertAdjacentHTML("afterbegin", `<li class = "li" counter = ${counter}><span>${counter}. ${text}</span><button class = "btn-delete">delete</button></li>`);

};


for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i);
	if (key !== counter) {
		counter = +key;
		text = localStorage.getItem(key);
		createElement();
		counter += 1;
	}
}

btnSave.addEventListener('click', function () {
	text = textarea.value;
	localStorage.setItem(counter, text);
	textarea.value = "";
	createElement();
	counter += 1;
});


list.addEventListener("click", function (event) {
	if (event.target.className != "btn-delete") return;
	let li = event.target.closest('.li');
	let counter = li.getAttribute("counter");
	localStorage.removeItem(counter);
	li.remove();
});





