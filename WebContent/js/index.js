"use strict";

/**
 * API:
 * get /updates/{logId}
 * post /member
 * delete /member/{memberId}
 * put /member/{memberId}
 */
let
clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clear, true);
let
addButton = document.getElementById("addButton");
addButton.addEventListener("click", addMember, true);

(function() {
	const
	gui = new GUI();
	gui.addRow('Nataniel', 'Pedersen', 'Fantoft', '91639791');

})();

function addMember() {
	const gui = new GUI();
	let firstname = document.getElementById("firstname").value;
	let lastname = document.getElementById("lastname").value;
	let address = document.getElementById("address").value;
	let phone = document.getElementById("phone").value;

	gui.addRow(firstname, lastname, address, phone);
	document.getElementById("firstname").value = '';
	document.getElementById("lastname").value = '';
	document.getElementById("address").value = '';
	document.getElementById("phone").value = '';

	let tElm = document.getElementsByTagName("table")[0];
	let url = '../Mservices/data' + "/member";
	const member = {
		'firstname' : tElm.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].value,
		'lastname' : tElm.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].value,
		'address' : tElm.getElementsByTagName("tr")[1].getElementsByTagName("td")[2].value,
		'phone' : tElm.getElementsByTagName("tr")[1].getElementsByTagName("td")[3].value,
	}
	console.log(member);
	const ajax = new AJAXConnection(url);

	ajax.post(null, {'member' : member});

	updateTable(gui, ajax);

}
function clear() {
	document.getElementById("firstname").value = '';
	document.getElementById("lastname").value = '';
	document.getElementById("address").value = '';
	document.getElementById("phone").value = '';
}
function updateTable(gui, ajax) {

	// oppdaterer innholdet i tabellen
}