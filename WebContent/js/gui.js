'use strict';

class GUI {
  constructor() {
    this.table = document.getElementById('members');

  }

  addRow(firstname, lastname, address, phone) {
    let row = this.table.insertRow(1);

    let first = row.insertCell(0);
    let last = row.insertCell(1);
    let adr = row.insertCell(2);
    let pho = row.insertCell(3);
    let del = row.insertCell(4);
    let edit = row.insertCell(5);

    first.innerHTML = firstname;
    last.innerHTML = lastname;
    adr.innerHTML = address;
    pho.innerHTML = phone;
    del.innerHTML = '<button class="deleteBtn">Delete</button>';
    edit.innerHTML = '<button class="editBtn">Edit</button>';
  }
  editRow(e){
	  let thisRow = e.parenNode.parenNode.rowIndex;
	  
  }

  deleteRow(e) {
    let thisRow = e.parentNode.parentNode.rowIndex;
    this.table.deleteRow(thisRow);
  }
   
}
