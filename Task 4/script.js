/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT) // Paimami duomenys iš JSON aplanko
	.then((response) => response.json()) // Gaunama JSON formatu
	.then(function (data) {
		console.log(data);
		data.forEach(function (element) {
			// Pereinama per kiekvieną "data" masyvo elementą
			let output = document.getElementById("output"); // Susiejama su HTML elementu
			output.classList.add("outputstyles"); // Pridedama klasė elementui, apjungsiančiam brand ir models elementus
			let brand = document.createElement("div"); // Sukuriamas brand elementas
			brand.classList.add("stylesbrand"); // Pridedama klasė brand elementui
			output.appendChild(brand); // Brand elementas įterpiamas į output elementą
			console.log(brand);

			let models = document.createElement("div");
			models.classList.add("stylesmodels");
			output.appendChild(models);
			brand.innerText = element.brand;
			models.innerText = element.models.join(", "); // Panaudojamas metodas join() dėl tvarkingesnio modelių atskyrimo pasirinktu būdu
			console.log(brand, models);
		});
	});
