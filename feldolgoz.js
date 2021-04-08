$(document).ready(function () {
    beolvas();
    $('#btnAdd').on('click', addTeendo);
    $('#btnBetolt').on('click', tablaTolt);

    $('#rendi').on('change', rendezes);
    $('article').delegate('.imgTorol', 'click', torles);
    $('article').delegate('.imgPipa', 'click', teljesit);
});

var teendok = [];
var sorrend = false;
function tablaTolt() {
    var txt = "<table><tr>" +
            "<th id='tblNev'>Teendő</th>" +
            "<th id='tblNev'>Dátum</th>" +
            "<th id='tblNev'>Teljesítve</th>" +
            "</tr>";

    for (var elem in teendok) {
        txt += "<tr><td>" + teendok[elem].todo + "</td>";
        txt += "<td>" + teendok[elem].datum + "</td>";
        if (teendok[elem].allapot === "1") {
            txt += "<td> Kész </td>";
        } else {
            txt += "<td> Nincs kész </td>";
        }
    }
    txt += "</table>";
    $('#tabla').html(txt);
}

function listKiir() {
    var lsTart = "";
    for (var elem in teendok) {
        lsTart += "<li>";
        if (teendok[elem].allapot === "0") {
            lsTart += teendok[elem].todo + " - ";
            lsTart += teendok[elem].datum + " ";
            lsTart += "<img src='kepek/trash.png' class='imgTorol' id='" + teendok[elem].ID + "' alt=''/> ";
            lsTart += "<img src='kepek/pipa.png' class='imgPipa' id='" + teendok[elem].ID + "' alt=''/> ";
            lsTart += "<br>";
        } else {
            lsTart += "<del>";
            lsTart += teendok[elem].todo + " - ";
            lsTart += teendok[elem].datum + " ";
            lsTart += "</del> ";
            lsTart += "<img src='kepek/trash.png' class='imgTorol' id='" + teendok[elem].ID + "' alt=''/> ";
            lsTart += "<br>";
        }
    }
    lsTart += "</li>";
    $('#adatok').html(lsTart);
}

function rendezes() {
    var index = $('#rendi option:selected').index();
    if (sorrend) {
        teendok.sort(
                function (a, b) {
                    return Number(a[index + 1] > b[index + 1]) - 0.5;
                });
    } else {
        teendok.sort(
                function (a, b) {
                    return Number(a[index + 1] < b[index + 1]) - 0.5;
                });
    }
    sorrend = !sorrend;
    tablaTolt();
}

function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            teendok = JSON.parse(result);
            listKiir();
        },
        error: function () {
            alert("Hiba az adatok beolvasásakor");
        }
    });
}

function addTeendo() {
    var teendo = {
        todo: $('#inTodo').val(),
        datum: $('#inDatum').val(),
        allapot: 0
    };

    $.ajax({
        type: "POST",
        url: "beir.php",
        data: teendo,
        success: function (ujteendo) {
            console.log(ujteendo);
            teendok.push(JSON.parse(ujteendo));
            listKiir();
        },
        error: function () {
            alert("Hiba az új adat felvitelekor!");
        }
    });
}

function torles() {
    var akt = $(this).closest('li');
    var id = $(this).attr('id');

    $.ajax({
        type: "DELETE",
        url: "torol.php?ID=" + id,
        success: function () {
            akt.remove();
        },
        error: function () {
            alert("Hiba az adatok törlésekor!");
        }
    });
}

function teljesit() {
    var id = $(this).attr('id');
    var edittodo = {
        ID: id,
        allapot: 1
    };
    $.ajax({
        type: "PUT",
        url: "modosit.php",
        data: edittodo,
        success: function () {
            beolvas();
        },
        error: function () {
            alert("Hiba az adatok módosításakor!");
        }
    });
}