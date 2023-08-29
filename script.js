// Funktion: Filtern nach Länder
function LandFilter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputLand");
    filter = input.value.toUpperCase();
    table = document.getElementById("TabelleLand");
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

// Funktion: Klick-Ereignis auf Spaltenüberschriften
function enableSorting(table) {
    const headers = table.querySelectorAll('th');

    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            sortTable(table, index);
        });
    });
}

// Funktion: Initialisierung Sortierfunktion für TabelleLand
const table = document.getElementById('TabelleLand');
enableSorting(table);

// Funktion: Sortierung nach Länder
function sortTable(table, column) {
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


 // JavaScript zum Überprüfen des inputLand-Felds auf String-Werte
 const inputLand = document.getElementById('inputLand');
 inputLand.addEventListener('input', function () {
     if (!/^[a-zA-Z\s]*$/.test(this.value)) {
         this.value = '';
     }
 });


// Ermitttlung Schriftkultur vom Browser
 function determineTextDirection() {
    const textDirection = window.getComputedStyle(document.body, null).getPropertyValue('direction');

    // Anpassen der Schriftkultur je nach Direction vom Browser
    if (textDirection === 'rtl') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
}

// Funktion beim Laden der Seite aufrufen
window.onload = determineTextDirection;