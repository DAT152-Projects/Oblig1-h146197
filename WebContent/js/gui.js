'use strict';

class GUI {
	constructor() {
		this.table = document.getElementById('members');
	}

	addRow(member, daoMember) {
		let row = this.table.insertRow(-1);

		row.insertCell(0).innerHTML = member.firstname;
		row.insertCell(1).innerHTML = member.lastname;
		row.insertCell(2).innerHTML = member.address;
		row.insertCell(3).innerHTML = member.phone;
		row.insertCell(4).innerHTML = '<button id="deleteBtn-' + member.memberId + '">Delete</button>';
		row.insertCell(5).innerHTML = '<button class="editBtn">Edit</button>';
		row.insertCell(6).innerHTML = '<input type="hidden" value=' + member.memberId + '"</input>';

		document.getElementById("deleteBtn-" + member.memberId).addEventListener("click", (e) => {
			//deleteMember(row.rowIndex);
			daoMember.onsuccess = null;
			daoMember.del([row.rowIndex]);
			this.deleteRow(row.rowIndex);
		}, true);
	}

	editRow(e){
		let row = e.parenNode.parenNode.rowIndex;
	}

	deleteRow(i) {
		this.table.deleteRow(i);
	}
}
