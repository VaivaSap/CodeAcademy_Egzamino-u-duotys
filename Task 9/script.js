/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
// Sukuriama konstruktoriaus funkcija
function Movie(title, director, budget) {
	// Sukuriamos objekto savybės
	this.title = title;
	this.director = director;
	this.budget = budget;
	// Sukuriamas metodas
	this.wasExpensive = function () {
		return this.budget > 100000000;
	};
}

let concreteMovie = new Movie("Titanikas", "Kazkas", 1999425525); // Sukuriamas konkretus objektas (Movie)
console.log(concreteMovie);
console.log(concreteMovie.wasExpensive());
