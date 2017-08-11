function gissa() {
	var gissning = document.getElementById("gissning").value
	var resultat = document.getElementById("resultat")
	if (gissning == "vanilj") {
		resultat.innerHTML = "Rätt gissat"
		resultat.style.color = "green"
	}
	else {
		resultat.innerHTML = "Fel gissat"
		resultat.style.color = "red"
	}
}