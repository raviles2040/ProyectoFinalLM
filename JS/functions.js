let contador = 0;

$("#noticiaCargada").ready(function () {
    $("button.nuevaNoticia").click(function () {
        let indiceNoticia = $("nuevaNoticia").data("indice")
        // var status = $(this).attr('data-status');
        alert("has pulsado el boton" + indiceNoticia)
    });
})
$(document).ready(function () {
    $("#curiosidades").click(function random() {
        var random = Math.floor((Math.random() * 10) + 1);
        if (random >= 5) {
            window.location.href = "../NEWS/news2.html"
        }
        else {
            window.location.href = "../NEWS/news3.html"
        }
    });

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
    $("#cargar").click(function () {
        $("#introduceNuevaNoticia").append("<h1>hola que tal </h1>");
        window.location.href = "../NEWS/newNews.html"
    });

    function pintarJson() {
        switch (contador) {
            case 0:
                imprimirTresPrimerasNoticias();
                break;
            case 1:
                imprimirTresUltimasNoticias();
                ocultarBoton();
                break;
        }
    }

    function imprimirTresPrimerasNoticias() {
        $.getJSON("../DATA/1.json", function (jsonObject) {
            $.each(jsonObject, function (i, news) {
                $("#newNews").append("<div id=\"noticiaCargada\" class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                    "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Leer más</button>" +
                    "</div>");
                $("#newNews").on('click', 'button.nuevaNoticia', function () {
                    let indiceNoticia = $(this).data("indice");
                    let indice = parseInt(indiceNoticia)
                    $("#todoElContenido").click(function () {
                        $("#todoElContenido").hide();
                    });
                    volcarNoticia(indice);
                })
            })
            contador++;
        });
    }

    function imprimirTresUltimasNoticias() {
        $.getJSON("../DATA/2.json", function (jsonObject) {
            $.each(jsonObject, function (i, news) {
                $("#newNews").append("<div id=\"noticiaCargada\" class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                    "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Leer más</button>" +
                    "</div>");
                $("#newNews").on('click', 'button.nuevaNoticia', function () {
                    let indiceNoticia = $(this).data("indice");
                    let indice = parseInt(indiceNoticia)
                    $("#todoElContenido").click(function () {
                        $("#todoElContenido").hide();
                    });
                    volcarNoticia(indice);
                })
            })
            contador++;
        });
    }

    function ocultarBoton() {
        $("#leerMas").css("display", "none");
    }

    function volcarNoticia(indice) {
        if (indice < 3) {
            $.getJSON("../DATA/1.json", function (jsonObject) {
                $.each(jsonObject, function (i, news) {
                    if (i == indice) {
                        $("#news").append("<div id=\"noticiaCargada\" class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                            "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                            "</div>");
                        return false;
                    }
                });
            });
        }
        else {
            $.getJSON("../DATA/2.json", function (jsonObject) {
                $.each(jsonObject, function (i, news) {
                    if (i == indice) {
                        $("#news").append("<div id=\"noticiaCargada\" class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                            "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                            "</div>");
                        return false;
                    }
                });
            });
        }
    }
    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight < 50) {
            pintarJson();
        }
    });
});






