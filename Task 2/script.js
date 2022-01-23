/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let i = 0;
function incrementClick() {
	updateDisplay(++i); // Kiekvienas mygtuko paspaudimas padidina reikšmę vienetu
}

function updateDisplay(val) {
	document.getElementById(`btn__state`).innerText = val; // Susiejama su HTML, rezultatas - kaip tekstas
}
