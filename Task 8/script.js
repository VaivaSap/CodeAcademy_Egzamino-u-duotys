/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
// Sukuriama konstruktoriaus funkcija
function Calculator() {
	// Sukuriami metodai
	this.sum = function (a, b) {
		return a + b;
	};
	this.subtraction = function (a, b) {
		return a - b;
	};
	this.multiplication = function (a, b) {
		return a * b;
	};
	this.division = function (a, b) {
		return a / b;
	};
}

let realCalculator = new Calculator(); // Sukuriamas konkretus kalkuliatorius
console.log(realCalculator.sum(2, 3));
