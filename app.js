function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
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

// courbe

var zone_dessin = document.getElementById("schema");
var graphe = zone_dessin.getContext("2d");
var compteur = 0;
graphe.strokeStyle = "#0098f8";
graphe.lineWidth = 2;
graphe.beginPath();
graphe.moveTo(0, f(0));
while (compteur < 10) {
  graphe.lineTo(30 * (compteur - 0), 300 - (f(compteur) - -1) * 150);
  compteur = compteur + 0.05;
}
graphe.stroke();
function f(x) {
  var y = Math.sin(x);
  return y;
}
graphe.beginPath();
graphe.lineWidth = "1";
graphe.strokeStyle = "black";
graphe.moveTo(0, zone_dessin.height / 2);
graphe.lineTo(zone_dessin.width, zone_dessin.height / 2);
graphe.lineTo(zone_dessin.width - 5, zone_dessin.height / 2 - 5);
graphe.moveTo(zone_dessin.width, zone_dessin.height / 2);
graphe.lineTo(zone_dessin.width - 5, zone_dessin.height / 2 + 5);
graphe.moveTo(zone_dessin.width / 2, zone_dessin.height);
graphe.lineTo(zone_dessin.width / 2, 0);
graphe.lineTo(zone_dessin.width / 2 - 5, 5);
graphe.moveTo(zone_dessin.width / 2, 0);
graphe.lineTo(zone_dessin.width / 2 + 5, 5);
graphe.stroke();
graphe.fillText("0", 0, 10 + zone_dessin.height / 2);
graphe.fillText("10", zone_dessin.width - 20, 10 + zone_dessin.height / 2);
graphe.fillText("-1", 5 + zone_dessin.width / 2, -8 + zone_dessin.height);
graphe.fillText("1", 5 + zone_dessin.width / 2, 8);
