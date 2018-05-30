let contador = 0;
$("#noticiaCargada").ready(function () {
    $("button.nuevaNoticia").click(function () {
        let indiceNoticia = $("nuevaNoticia").data("indice")
        // var status = $(this).attr('data-status');
        alert("has pulsado el boton" + indiceNoticia)
    });
})
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

    function pintarJson() {
        switch (contador) {
            case 0:
                imprimirTresPrimerasNoticias();
                break;
            case 1:
                imprimirTresUltimasNoticias();
                break;
            case 2:
                ocultarBoton();
                break;
        }
    }

    function imprimirTresPrimerasNoticias() {
        $.getJSON("../DATA/1.json", function (jsonObject) {
            $.each(jsonObject, function (i, news) {
                if (i < 2) {
                    $("#news").append("<div id=\"noticiaCargada\" class=\"col-sm-6\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                        "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                        "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Leer más</button>" +
                        "</div>");
                    $("#news").on('click', 'button.nuevaNoticia', function () {
                        alert('El indice es el siguiente: ' + $(this).data('indice'));
                    })
                }
                else {
                    $("#news").append("<div id=\"noticiaCargada\" class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                        "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                        "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Leer más</button>" +
                        "</div>");
                    $("#news").on('click', 'button.nuevaNoticia', function () {
                        alert('El indice es el siguiente: ' + $(this).data('indice'));
                    })
                }
            });
            contador++;
        });
    }

    function imprimirTresUltimasNoticias() {
        $.getJSON("../DATA/2.json", function (jsonObject) {
            $.each(jsonObject, function (i, news) {
                if (i < 2) {
                    $("#news").append("<div id=\"noticiaCargada\" class=\"col-sm-6\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                        "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                        "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Leer más</button>" +
                        "</div>");
                    $("#news").on('click', 'button.nuevaNoticia', function () {
                        alert('El indice es el siguiente: ' + $(this).data('indice'));
                    })
                }
                else {
                    $("#news").append("<div id=\"noticiaCargada\" class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                        "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                        "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" id=\"tester\" data-indice=" + news.indice + ">Leer más</button>" +
                        "</div>");
                    $("#news").on('click', 'button.nuevaNoticia', function () {
                        alert('El indice es el siguiente: ' + $(this).data('indice'));
                    })
                }
            });
            contador++;
        });
    }

    function ocultarBoton() {
        $("#leerMas").css("display", "none");
    }

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




