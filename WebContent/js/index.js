"use strict";

/**
 * API:
 * get /updates/{logId}
 * post /member
 * delete /member/{memberId}
 * put /member/{memberId}
 */

class AppController {
	constructor() {
		this.gui = new GUI();
		this.daoMember = new AJAXConnection('../Mservices/data' + '/member');
		this.daoUpdates = new AJAXConnection('../Mservices/data' + '/updates');
	}

	init() {
		let that = this;

		// Event listeners
		document.getElementById("clearButton").addEventListener("click", function() {
			document.getElementById("firstname").value = '';
			document.getElementById("lastname").value = '';
			document.getElementById("address").value = '';
			document.getElementById("phone").value = '';
		}, true);

		document.getElementById("addButton").addEventListener("click", function() {
			const member = {
					firstname: document.getElementById("firstname").value,
					lastname: document.getElementById("lastname").value,
					address: document.getElementById("address").value,
					phone: document.getElementById("phone").value
			}

			that.gui.addRow(member);
		}, true);

		this.getMembers();
	}
	
	getMembers() {
		this.daoUpdates.onsuccess = (data) => {
			let members = JSON.parse(data).updates.newMembers;
			
			for (let i = 0; i < members.length; i++) {
				this.gui.addRow(members[i]);
			}
		}
		
		this.daoUpdates.get([-1])
	}

}

let app = new AppController();
app.init();
