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
		this.dao = new AJAXConnection('../Mservices/data' + '/member');
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
			//that.dao.post(null, {'member' : member});
		}, true);

		that.gui.addRow({
			firstname: '1',
			lastname: '2',
			address: '3',
			phone: '4'
		});
	}

}

let app = new AppController();
app.init();
