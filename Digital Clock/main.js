//Dropdown menu
function showTime() {
	d = new Date(); //Getting the local date object

	utc = d.getTime() + d.getTimezoneOffset() * 60000; //converting the time to gmt and in miliseconds for easier conversion of time for different countries

	checkDropdown = document.getElementById("list").value; // getting the value of the selected country

	var session = "PM";

	if (checkDropdown == "india") {
		nd = new Date(utc + 3600000 * 5.5); // create new object of the date according to chosen country
	} else if (checkDropdown == "california") {
		nd = new Date(utc + 3600000 * -7);
	} else if (checkDropdown == "newYork") {
		nd = new Date(utc + 3600000 * -4);
	} else if (checkDropdown == "japan") {
		nd = new Date(utc + 3600000 * 9);
	} else if (checkDropdown == "uae") {
		nd = new Date(utc + 3600000 * 4);
	} else if (checkDropdown == "moscow") {
		nd = new Date(utc + 3600000 * 3);
	} else if (checkDropdown == "france") {
		nd = new Date(utc + 3600000 * 2);
	} else if (checkDropdown == "africa") {
		nd = new Date(utc + 3600000 * 2);
	}

	// Changed the timming in 12 hours format
	var res = nd.toLocaleString();
	res = res.split(" ");
	var ans = res[1].split(":");

	if (ans[0] > 12) {
		var t = parseInt(ans[0]) - 12;
		ans[0] = t.toString();
		session = "PM";
	}

	if (ans[0] == 0) {
		ans[0] = "12";
	}

	res[1] = ans.join(":");

	document.getElementById("clock").innerHTML = res[1] + " " + session;
	setTimeout(showTime, 1000);
}
showTime();


