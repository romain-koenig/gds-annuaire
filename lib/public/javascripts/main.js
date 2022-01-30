const updateResult = q => {

	let filter, cards, title, i;
	filter = q.toUpperCase();
	cards = document.querySelectorAll(".user-card");

	for (i = 0; i < cards.length; i++) {
		title = cards[i].querySelector(".card-body .card-title");
		if (title.innerText.toUpperCase().indexOf(filter) > -1) {
			cards[i].style.display = "";
		} else {
			cards[i].style.display = "none";
		}
	}
}

updateResult("")
