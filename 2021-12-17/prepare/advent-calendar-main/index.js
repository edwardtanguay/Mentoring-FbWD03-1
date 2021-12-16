// welcher Tag ist heute?
let d = new Date();
d.setDate(22);
let date = d.getDate();
for (i = 1; i < date; i++) {
	document.getElementById(i).style = "background-color: violet";
}

function showGift(indexTag) {
	let modal = document.getElementById("myModal");
	// prüfen, ob der Tag in der Vergangenheit oder Gegenwart liegt, dann Zitat anzeigen, sost nicht
	if (indexTag > date) {
		// Türchen ist noch nicht frei
		alert("Try again another day.")
	} else {
		modal.style.display = "block";
		document.getElementById("quote").innerHTML = quotesArray[indexTag - 1].text;
		document.getElementById("author").innerHTML = quotesArray[indexTag - 1].author;
		// Zitat anzeigen
		//alert(quotesArray[indexTag -1].text + " von Author: " + quotesArray[indexTag -1].author);
	}
}

function closeModal() {
	let modal = document.getElementById("myModal");
	modal.style.display = "none";
}

// quote = Zitat => im Array
let quotesArray = [];
console.log('nnn');
// Zitate erstellen
quotesArray.push({
	text: "Christmas is built upon a beautiful and intentional paradox; that the birth of the homeless should be celebrated in every home",
	author: "G.K. Chesterton"
});
quotesArray.push({
	text: "The rooms were very still while the pages were softly turned and the winter sunshine crept in to touch the bright heads and serious faces with a Christmas greeting",
	author: "Louisa May Alcott"
});
quotesArray.push({
	text: "If my Valentine you won't be, I'll hang myself on your Christmas tree.",
	author: "Ernest Hemingway"
});
quotesArray.push({
	text: "Zitat 4 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 5 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 6 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 7 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 8 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 9 Dummy Text",
	author: "John Smith",
	src: "/images/pictureOfDay9"
});
quotesArray.push({
	text: "Zitat 10 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 11 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 12 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 13 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 14 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 15 Dummy Textnnn",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 16 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 17 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 18 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 19 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 20 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 21 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 22 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 23 Dummy Text",
	author: "John Smith"
});
quotesArray.push({
	text: "Zitat 24 Dummy Text",
	author: "John Smith"
});

console.log(quotesArray);