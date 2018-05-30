let contador = 0;

function pintarJson() {
    switch (contador) {
        case 0:
            imprimirTresPrimerasNoticias()
            break;
        case 1:
            imprimirTresUltimasNoticias()
            break;
        default:
            break;
    }
}
function imprimirTresPrimerasNoticias() {
    $.getJSON("../DATA/1.json", function (jsonObject) {
        $.each(jsonObject, function (i, news) {
            if (i < 2) {
                $("#news").append("<div class=\"col-sm-6\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                    "<button type=button class=\"btn btn-info btn-lg \" + id=\"nuevaNoticia\" data-indice=" + news.indice + ">Leer más</button>" +
                    "</div>");
            }
            else {
                $("#news").append("<div class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                    "<button type=button class=\"btn btn-info btn-lg \" + id=\"nuevaNoticia\" data-indice=" + news.indice + ">Leer más</button>" +
                    "</div>");
            }
        });
        contador++;
    });
}

function imprimirTresUltimasNoticias() {
    $.getJSON("../DATA/2.json", function (jsonObject) {
        $.each(jsonObject, function (i, news) {
            if (i < 2) {
                $("#news").append("<div class=\"col-sm-6\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                    "<button type=button class=\"btn btn-info btn-lg \" + id=\"nuevaNoticia\" data-indice=" + news.indice + ">Leer más</button>" +
                    "</div>");
            }
            else {
                $("#news").append("<div class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                    "<button type=button class=\"btn btn-info btn-lg \" + id=\"nuevaNoticia\" data-indice=" + news.indice + ">Leer más</button>" +
                    "</div>");
            }
        });
        contador++;
    });
}

$(document).ready(function () {
    $("#leerMas").click(function () {
        pintarJson();
    });

    $("#noticiaCompleta1").click(function () {
        window.location.href = "../NEWS/news1.html"
    });
    $("#noticiaCompleta2").click(function () {
        window.location.href = "../NEWS/news2.html"
    });
    $("#noticiaCompleta3").click(function () {
        window.location.href = "../NEWS/news3.html"
    });
    $("#nuevaNoticia").click(function () {
        let indiceNoticia = $("#nuevaNoticia").data("indice")
        rellenarTemplate(indiceNoticia);
    });

    function pintarNoticia(jsonObject, indice) {
        $.each(json, function (i, news) {
            if (news.indice == indice) {
                $("#introduceNuevaNoticia").append("<div class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" + "</div>");
            }
        });
        window.location.href = "../NEWS/newNews.html"
    }

    $(window).on("scroll", function () {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            pintarJson();
        }
    });
});




