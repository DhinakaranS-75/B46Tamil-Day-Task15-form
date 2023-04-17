
	const myForm = document.getElementById("myForm");
	const myTable = document.getElementById("myTable");
	
	myForm.addEventListener("submit", function(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const firstName = formData.get("fname");
		const lastName = formData.get("lname");
		const address = formData.get("address");
		const pincode = formData.get("pincode");
		const gender = formData.get("gender");
		const food = formData.getAll("food[]");
		const state = formData.get("state");
		const country = formData.get("country");
		
		const newRow = myTable.insertRow(-1);
		const firstNameCell = newRow.insertCell(0);
		const lastNameCell = newRow.insertCell(1);
		const addressCell = newRow.insertCell(2);
		const pincodeCell = newRow.insertCell(3);
		const genderCell = newRow.insertCell(4);
		const foodCell = newRow.insertCell(5);
		const stateCell = newRow.insertCell(6);
		const countryCell = newRow.insertCell(7);
		
		firstNameCell.innerHTML = firstName;
		lastNameCell.innerHTML = lastName;
		addressCell.innerHTML = address;
		pincodeCell.innerHTML = pincode;
		genderCell.innerHTML = gender;
		foodCell.innerHTML = food.join(", ");
		stateCell.innerHTML = state;
		countryCell.innerHTML = country;
		
		myForm.reset();
	});

