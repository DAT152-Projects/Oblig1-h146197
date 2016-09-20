'use strict';

class GUI {
  constructor() {
    this.table = document.getElementById('members');
  }

  addRow(member) {
    let row = this.table.insertRow(-1);

    row.insertCell(0).innerHTML = member.firstname;
    row.insertCell(1).innerHTML = member.lastname;
    row.insertCell(2).innerHTML = member.address;
    row.insertCell(3).innerHTML = member.phone;
    row.insertCell(4).innerHTML = '<button class="deleteBtn">Delete</button>';
    row.insertCell(5).innerHTML = '<button class="editBtn">Edit</button>';
  }

  editRow(e){
	  let row = e.parenNode.parenNode.rowIndex;
  }

  deleteRow(e) {
    let thisRow = e.parentNode.parentNode.rowIndex;
    this.table.deleteRow(thisRow);
  }
}
