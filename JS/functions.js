$(document).ready(function () {
    $("button").click(function () {
        var contador = 0;
        console.log("ha entrado en el documento JS")
        $.getJSON("../DATA/1.json", function (jsonObject) {
            //en aquest punt l'objecte jsonObject correspon al fitxer
            console.log(jsonObject)
            pintar(jsonObject);
        });

        function pintar(json) {
            console.log("JSON --> ", json)
            $.each(json, function (i, news) {
                $("#news").append("<div'" + i + "'>" + "<h1>" + news.title + "</h1>" + "<br>" + "<img src=" + news.img + ">" + "<p>" + news.description + "</p>" + "</div>");
            });
        }

        $.getJSON("../DATA/2.json", function (jsonObject) {
            //en aquest punt l'objecte jsonObject correspon al fitxer
            console.log("HA ENTRADO EN EL SEGUNDO JSON")
            pintar1(jsonObject);
        });

        function pintar1(json) {
            $.each(json, function (i, news) {
                $("#news1").append("<div'" + i + "'>" + "<h1>" + news.title + "</h1>" + "<br>" + "<img src=" + news.img + ">" + "<p>" + news.description + "</p>" + "</div>");
            });
        }
    });
});
