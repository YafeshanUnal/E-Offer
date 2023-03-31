const WebSocket = require("ws");
const url = "wss://cekirdektenyetisenler.kartaca.com/ws";
const socket = new WebSocket(url);

function convertToAscii(ascii) {
	// araya virgül koyma
	return ascii
		.split("")
		.map((char) => {
			if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
				return String.fromCharCode(219 - char.charCodeAt());
			} else {
				return char;
			}
		})
		.join("");
}

socket.onopen = function (event) {
	console.log("WebSocket is open now.\n");
};
socket.onmessage = function (event) {
	const data = {
		type: "REGISTER",
		name: "Yafeshan",
		surname: "Ünal",
		email: "yafeshanunal@gmail.com",
		registrationKey: convertToAscii(
			event.data.slice(event.data.length - 66, event.data.length - 2)
		),
	};
	console.log("\nMessage:\t", event.data);
	console.log("Registration Key:\t", data.registrationKey);
	socket.send(JSON.stringify(data));
	if ((event.data.type = "CONGRATULATIONS")) socket.close();
};

/**
 * ? ab,z result : zy,a
 * ! ASCII to Number a = z , b = y
 * a+z = 97+122 = 219 b + y = 98+121 = 219 all of sum is 219
 * big letter is 65-90
 */

// registration key = 7a29123d1104f3b3cdde2b63cfa5ef4f54e3edddd57c4ea8f3d150afe1e23837
