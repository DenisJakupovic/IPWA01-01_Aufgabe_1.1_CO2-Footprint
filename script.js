// Funktion: Filtern nach Länder
function LandFilter() {
    var input, filter, table, tr, td, i , txtValue;
    input= document.getElementById("inputLand");
    filter= input.value.toUpperCase();
    table= document.getElementById("TabelleLand");
    tr= table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td") [0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Funktion zum Hinzufügen von Klick-Ereignissen zu den Spaltenüberschriften
function enableSorting(table) {
    const headers = table.querySelectorAll('th');

    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            sortTable(table, index);
        });
    });
}

// Initialisieren Sie die Sortierfunktion für Ihre Tabelle
const table = document.getElementById('TabelleLand');
enableSorting(table);

//Funktion: Sortierung nach Länder
function sortTable(table, column) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isAscending = table.classList.contains('ascending');

    // Sortiere die Zeilen basierend auf den Zellwerten der angegebenen Spalte und Sortierrichtung
    rows.sort((a, b) => {
        const cellA = a.querySelector(`td:nth-child(${column + 1})`);
        const cellB = b.querySelector(`td:nth-child(${column + 1})`);
        const valueA = cellA.textContent.trim();
        const valueB = cellB.textContent.trim();

        if (column === 1) {
            // Sortiere numerisch, wenn es sich um die zweite Spalte handelt
            return isAscending ? parseFloat(valueA) - parseFloat(valueB) : parseFloat(valueB) - parseFloat(valueA);
        } else {
            // Sortiere als Text für andere Spalten
            return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }
    });

    // Entferne bestehende Zeilen aus dem tbody
    rows.forEach(row => tbody.removeChild(row));

    // Füge die sortierten Zeilen zurück in den tbody ein
    rows.forEach(row => tbody.appendChild(row));

    // Ändere die Sortierrichtungsklasse
    table.classList.toggle('ascending');
}

  // JavaScript zum Überprüfen des inputLand-Felds auf String-Werte
  const inputLand = document.getElementById('inputLand');
  inputLand.addEventListener('input', function () {
      if (!/^[a-zA-Z\s]*$/.test(this.value)) {
          // Wenn keine Buchstaben und Leerzeichen eingegeben wurden, leeren Sie das Feld
          this.value = '';
      }
  });