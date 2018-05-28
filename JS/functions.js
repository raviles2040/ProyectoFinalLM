let contador = 0;

$(document).ready(function () {
    $("#leerMas").click(function () {
        $.getJSON("../DATA/1.json", function (jsonObject) {
            console.log(jsonObject)
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
                case 2:
                    noHayMasNoticias();
                    break;
            }
        }

        function imprimirTresPrimerasNoticias(json) {
            console.log("JSON --> ", json)
            $.each(json, function (i, news) {
                console.log(i);
                $("#news").append("<div class=\"col-sm-6\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title + "</h1>" + "<br>" + "<img src=" + news.img + "  class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" + "</div>");
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
                    console.log(i);
                    $("#news").append("<div class=\"col-sm-6\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title + "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" + "</div>");
                });
                contador++;
            }
        }
        function noHayMasNoticias() {
            $("#leerMas").css("visibility","hidden")
            $("#noHayMasNoticiasQueCargar").css("visibility","visible")
            $("modal-body").append("<div class=\"alert alert-danger\"><strong>¡Atención!<a href=\"#\" class=\"alert-link\">no hay más noticias que cargar</a>.</div>")
        }
    });
});

