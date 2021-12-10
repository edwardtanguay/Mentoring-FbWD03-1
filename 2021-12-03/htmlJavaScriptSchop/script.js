// Neue Funktion für Aufgabe Teil 3 - Warenkorb
function kaufen(produktName, preis) {
  // Erst wenn Button gedrückt, dann zeigen vom Warenkorb
  // vorher per CSS display: none
  document.getElementById("warenkorb").style.display = "block";
  // im Warenkorb neue Tabellen-Zeile hinzufügen
  document.getElementById("liste").innerHTML =
    document.getElementById("liste").innerHTML +
    "<tr><td>" +
    produktName +
    "</td><td>" +
    preis +
    " €</td></tr>";

  // Endsumme neu berechnen
  let letzteSumme = document.getElementById("total").innerHTML;
  // entfernen des Euro-Zeichens, damit String in Zahl umgewandelt werden kann
  letzteSumme = letzteSumme.replace(" €", "");
  // Umwandlung von String in Zahl
  letzteSumme = Number(letzteSumme);
  // Rechnen mit der Zahl und anschließend Euro-Zeichen wieder anhängen
  document.getElementById("total").innerHTML = letzteSumme + preis + " €";
}

// Alte Funktionen für Aufgabe Teil 1 + 2 - Onlineshop / Währung

let currency = "euro"; // merkt sich aktuelle Währung
const dollarKurs = 1.13; // Kurs nur hier ändern

function switchCurrency() {
  // von den nächsten zwei Zeilen nicht verwirren lassen
  // hatten wir noch nicht.
  let preisElemente = document.getElementsByClassName("price");
  let preise = [];

  for (let i = 0; i < preisElemente.length; i++) {
    let preisText = preisElemente[i].innerHTML;
    let preisZahl = zahlVonText(preisText);
    preise.push(preisZahl);
  }

  if (currency == "euro") {
    // aktive Währung wechseln
    currency = "dollar";
    // Button umbenennen
    document.getElementById("btn-currency").innerHTML =
      '<img class="flag" src="./images/flag-eu.svg" alt="" />' +
      "Preise in Euro anzeigen";
    // Alle Preise ändern
    for (let i = 0; i < preisElemente.length; i++) {
      preisElemente[i].innerHTML = "$ " + (preise[i] * dollarKurs).toFixed(2);
    }
    // nur else würde reichen, benutze else if () für Klarheit
  } else if (currency == "dollar") {
    // aktive Währung wechseln
    currency = "euro";
    // Button umbenennen
    document.getElementById("btn-currency").innerHTML =
      '<img class="flag" src="./images/flag-us.svg" alt="" />' +
      "Preise in Dollar anzeigen";
    // Alle Preise ändern
    for (let i = 0; i < preisElemente.length; i++) {
      preisElemente[i].innerHTML = (preise[i] / dollarKurs).toFixed(2) + " €";
    }
  }
}

// Funktion die Preis (String) in eine Zahl umwandelt und
// zurück gibt (return)
function zahlVonText(text) {
  text = text.replace(",00", ""); // für Start
  text = text.replace(" €", ""); // für Umwandlung € -> $
  text = text.replace("$ ", ""); // für Umwandlung $ -> €
  return text;
}
