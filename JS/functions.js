$(document).ready(function () {
    $("button").click(function () {
        var contador = 0;
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
                default:
                    return alert("No hay más noticias que cargar")
                    break;
            }
        }

        function imprimirTresPrimerasNoticias(json) {
            if (contador == 0) {
                console.log("JSON --> ", json)
                $.each(json, function (i, news) {
                    $("#news").append("<div'" + i + "'>" + "<h1>" + news.title + "</h1>" + "<br>" + "<img src=" + news.img + ">" + "<p>" + news.description + "</p>" + "</div>");
                });
                contador++;
            }
            else {

            }
        }

        function imprimirTresUltimasNoticias(json) {
            $.getJSON("../DATA/2.json", function (jsonObject) {
                //en aquest punt l'objecte jsonObject correspon al fitxer
                console.log("HA ENTRADO EN EL SEGUNDO JSON")
                pintar1(jsonObject);
            });

            function pintar1(json) {
                $.each(json, function (i, news) {
                    $("#news1").append("<div'" + i + "'>" + "<h1>" + news.title + "</h1>" + "<br>" + "<img src=" + news.img + ">" + "<p>" + news.description + "</p>" + "</div>");
                });
                contador++;
            }
        }
    });
});
