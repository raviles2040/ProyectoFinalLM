$(document).ready(function() {

    $.getJSON("../DATA/1.json", function (jsonObject) {
        console.log("ha entrado en el getJSON")
        //en aquest punt l'objecte jsonObject correspon al fitxer
        console.log(jsonObject)
        pintar(jsonObject);
    });

    function pintar(json) {
        console.log("JSON --> " ,json)
        $.each(json, function (i, news) {
            $("#news").append("<div'" + i + "'>" + "<h1>" + news.title + "</h1>" + "<br>" + "<img src=" + news.img + ">" + "<p>" + news.description + "</p>" + "</div>");
        });
    }
})
