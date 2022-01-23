/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

function showList() {
	fetch(ENDPOINT)
		.then((response) => response.json())
		.then(function (data) {
			data.forEach(function (element) {
				let output = document.getElementById("output"); // Susiejama su HTML pagal elemento ID

				let content = document.createElement("div"); // Sukuriamas elementas
				content.classList.add("stylecss"); // Sukuriama CSS klasė
				output.appendChild(content); // Pridedamas elementas

				let login = document.createElement("div");
				content.appendChild(login);

				login.innerText = element.login; // HTML elementui priskiriama masyvo elemento savybė
				let url = document.createElement("div");
				content.appendChild(url);
				url.innerText = element.avatar_url;

				console.log(element);
			});
			let explanationText = document.getElementById("message");
			explanationText.remove(); // Išima paaiškinamąją žinutę, turinčią id "message"
			console.log(data);
		});
}

document.getElementById("btn").addEventListener("click", showList); // Tik paspaudus mygtuką parodomas sąrašas
