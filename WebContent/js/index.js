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
		// Event listeners
		document.getElementById("clearButton").addEventListener("click", function() {
			document.getElementById("firstname").value = '';
			document.getElementById("lastname").value = '';
			document.getElementById("address").value = '';
			document.getElementById("phone").value = '';
		}, true);

		document.getElementById("addButton").addEventListener("click", () => {
			const member = {
					firstname: document.getElementById("firstname").value,
					lastname: document.getElementById("lastname").value,
					address: document.getElementById("address").value,
					phone: document.getElementById("phone").value
			}
			console.log(1, member)
			this.addMember(member);
		}, true);

		// Get inital members
		this.getMembers();
	}
	
	deleteMember(member) {
		
	}
	
	addMember(member) {
		this.daoMember.onsuccess = (data) => {
			console.log(2, data)
			member.memberId = JSON.parse(data).updatedMember.memberId;
			this.gui.addRow(member);
		}
		console.log(3, member)
		this.daoMember.post(null, {'member': member});
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
