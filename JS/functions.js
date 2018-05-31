let contador = 0;
let style = "class=\"col-sm-6\""


$(document).ready(function () {
    let json1 = $.getJSON("../DATA/1.json", function (jsonObject) {
        return jsonObject;
    });

    let json2 = $.getJSON("../DATA/2.json", function (jsonObject) {
        return jsonObject;
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

    function pintarJson() {
        switch (contador) {
            case 0:
                imprimirNoticias(json1);
                break;
            case 1:
                imprimirNoticias(json2);
                break;
            case 2:
                ocultarBoton();
                break;
        }
    }
    function imprimirNoticias(json) {
        $.each(json, function (i, news) {
            if (i < 2) {
                style = "class=\"col-sm-12\""
            }
            $("#news").append("<div id=\"noticiaCargada\" " + style + "style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Leer más</button>" +
                "</div>");
            $("#news").on('click', 'button.nuevaNoticia', function () {
                alert('El indice es el siguiente: ' + $(this).data('indice'));
            })
        });
        contador++;
    };

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