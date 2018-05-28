let contador = 0;

$(document).ready(function () {
    $("#leerMas").click(function () {
        $.getJSON("../DATA/1.json", function (jsonObject) {
            volcarJson(jsonObject);
        });

        function volcarJson(json) {
            switch (contador) {
                case 0:
                    imprimirTresPrimerasNoticias(json)
                    break;
                case 1:
                    imprimirTresUltimasNoticias(json)
                    break;
                default:
                    break;
            }
        }

        function imprimirTresPrimerasNoticias(json) {
            $.each(json, function (i, news) {
                if (i < 2) {
                    $("#news").append("<div class=\"col-sm-6\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                        "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                        "<button type=button class=\"btn btn-info btn-lg \" + id=\"nuevaNoticia\" data=" + news.indice + ">Leer más</button>" +
                        "</div>");
                }
                else {
                    $("#news").append("<div class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                        "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                        "<button type=button class=\"btn btn-info btn-lg \" + id=\"nuevaNoticia\" data=" + news.indice + ">Leer más</button>" +
                        "</div>");
                }
            });
            contador++;
        }

        function imprimirTresUltimasNoticias(json) {
            $.getJSON("../DATA/2.json", function (jsonObject) {
                //en aquest punt l'objecte jsonObject correspon al fitxer
                console.log("HA ENTRADO EN EL SEGUNDO JSON")
                pintar1(jsonObject);
            });

            function pintar1(json) {
                $.each(json, function (i, news) {
                    if (i < 2) {
                        $("#news").append("<div class=\"col-sm-6\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                            "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                            "<button type=button class=\"btn btn-info btn-lg \" + id=\"nuevaNoticia\" data=" + news.indice + ">Leer más</button>" +
                            "</div>");
                    }
                    else {
                        $("#news").append("<div class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                            "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                            "<button type=button class=\"btn btn-info btn-lg \" + id=\"nuevaNoticia\" data=" + news.indice + ">Leer más</button>" +
                            "</div>");
                    }
                });
                $("#leerMas").css("display", "none")
                contador++;
            }
        }
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
    $("nuevaNoticia").click(function () {
        indiceNoticia = $("nuevaNoticia").data("indice")
        rellenarTemplate(indiceNoticia);
    });

    function rellenarTemplate(indice) {
        if (indice <= 3) {
            $.getJSON("../DATA/1.json", function (jsonObject) {
                //en aquest punt l'objecte jsonObject correspon al fitxer
                console.log("HA ENTRADO EN EL SEGUNDO JSON")
                pintarNoticia(jsonObject, indice);
            });
        }
        else {
            $.getJSON("../DATA/2.json", function (jsonObject) {
                //en aquest punt l'objecte jsonObject correspon al fitxer
                console.log("HA ENTRADO EN EL SEGUNDO JSON")
                pintarNoticia(jsonObject, indice);
            });
        }
    }
    function pintarNoticia(jsonObject, indice) {
        $.each(json, function (i, news) {
            if (news.indice == indice) {
                $("#introduceNuevaNoticia").append("<div class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +"</div>");
            }
        });
        window.location.href = "../NEWS/newNews.html"
    }
});


