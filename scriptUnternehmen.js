// Funktion: Filtern nach Unternehmen
function UnternehmenFilter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputUnternehmen");
    filter = input.value.toUpperCase();
    table = document.getElementById("TabelleUnternehmen");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
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

// Funktion: Klick-Ereignis auf Spaltenüberschriften für Unternehmenstabelle
function enableSorting(table) {
    const headers = table.querySelectorAll('th');

    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            sortUnternehmenTable(table, index);
        });
    });
}

// Funktion: Initialisierung Sortierfunktion für TabelleUnternehmen
const tableUnternehmen = document.getElementById('TabelleUnternehmen');
enableSorting(tableUnternehmen);

// Funktion: Sortierung nach Unternehmen
function sortUnternehmenTable(table, column) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isAscending = table.classList.contains('ascending');

    // Sortierung: anhand Zellwert der Spalte
    rows.sort((a, b) => {
        const cellA = a.querySelector(`td:nth-child(${column + 1})`);
        const cellB = b.querySelector(`td:nth-child(${column + 1})`);
        const valueA = cellA.textContent.trim();
        const valueB = cellB.textContent.trim();

        if (isAscending) {
            return valueA.localeCompare(valueB, undefined, { numeric: true });
        } else {
            return valueB.localeCompare(valueA, undefined, { numeric: true });
        }
    });

    // Entfernen Zeile aus Tabelle bei Sortierung
    rows.forEach(row => {
        tbody.removeChild(row);
    });

    // Hinzufügen Zeile aus Tabelle bei Sortierung
    rows.forEach(row => {
        tbody.appendChild(row);
    });

    // Sortierrichtung wechseln bei mehrfachem Klick auf oberste Zeile
    table.classList.toggle('ascending');
}


 // JavaScript zum Überprüfen des inputUnternehmen-Felds auf String-Werte
 const inputUnternehmen = document.getElementById('inputUnternehmen');
 inputUnternehmen.addEventListener('input', function () {
     if (!/^[a-zA-Z\s]*$/.test(this.value)) {
         this.value = '';
     }
 });