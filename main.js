'use strict'

let list = document.getElementById("list");
let btnSave = document.getElementById("btnSave");
let textarea = document.getElementById("textarea");
//let notes = [];
let state = { edit: false, key: undefined };
let counter = 1;


btnSave.addEventListener('click', function () {



	let text = textarea.value;

	for(let i = 0; i < localStorage.length; i++){
		let key = localStorage.key(i);
		if(key !== "counter") {
			counter = key;
			text = localStorage("key")
		}
	}

	//notes.push({counter , text});
	localStorage.setItem(counter, text);
	textarea.value = "";

	let li = document.createElement('li');
	//li.dataset.num = notes.length - 1;
	li.textContent = text;
	list.insertAdjacentHTML("afterbegin", `<li class = "li" counter = ${counter}><span>${counter}. ${text}</span><button class = "btn-delete">delete</button></li>`);
	counter += 1;
	//console.log("[notes]", notes);
	console.log("[localStor]", localStorage);
	let myData = localStorage.getItem(counter);
	console.log("[data]", myData);

});
//const getKey =(text) => {
//	let key = -1 ;
//	for(let i = 0; i < localStorage.length; i++) {
//		if(localStorage.getItem(localStorage.key(i)) === text) {
//			key = localStorage.key(i);
//		}
//	}
//	return key;
//}

list.addEventListener("click", function (event) {
	if (event.target.className != "btn-delete") return;
	let li = event.target.closest('.li');
	let counter = li.getAttribute("counter");
	localStorage.removeItem(counter);
	li.remove();
});



