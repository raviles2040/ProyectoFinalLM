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
            let tamaño = 6;
            $.each(json, function (i, news) {
                if (i < 2) {
                    tamaño = 12;
                }
                $("#news").append("<div class=\"col-sm-" + tamaño + "\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                    "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                    "<button type= button class=btn btn-info btn-lg data-toggle= modal data-target=" + news.modal + ">Leer más</button>" +
                    "</div>");
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
                let tamaño = 6;
                $.each(json, function (i, news) {
                    if (i < 2) {
                        tamaño = 12;
                    }
                    $("#news").append("<div class=\"col-sm-" + tamaño + "\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                        "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                        "<button type= button class=btn btn-info btn-lg data-toggle= modal data-target=" + news.modal + ">Leer más</button>" +
                        "</div>");
                });
                contador++;
            }
            $("#leerMas").css("display", "none")
            contador++;
        }
    }
    });
});

