// let xhr = new new XMLHttpRequest();
// xhr.onreadystatechange = function () {
// 	if (xhr.readyState === 4 && xhr.status === 200) {
// 		document.getElementById('ajax').innerHTML = xhr.responseText;
// 	}
// };
// xhr.open('GET', 'sidebar.html');
// xhr.send();

const xhr = new XMLHttpRequest();

// callback function 

xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		var employees = JSON.parse(xhr.responseText);

		var statusHTML = '<ul class="bulleted>';
		for (var i = 0; i < employees.length; i++) {
			if(employees[i].inoffice === true) {
				statusHTML += '<li class="in">';
			} 

			else {
				statusHTML += '<li class="out">';
			}
			statusHTML += employees[i].name;
			statusHTML += '</li>';

		}

		statusHTML += '</ul>';
		document.getElementById('employees').innerHTML = statusHTML;
	}
};

// Open a request

xhr.open('GET', 'data/employees.json');

//send request
xhr.send();