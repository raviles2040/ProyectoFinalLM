$(function () {
    $.getJSON("../DATA/2.json", function (jsonObject) {
        //en aquest punt l'objecte jsonObject correspon al fitxer
        pintar(jsonObject);
    });

    function pintar(json) {
        $.each(json, function (i, news) {
            $("#news2").append("<div'" + i + "'>" + "<h1>" + news.title + "</h1>" + "<br>" + "<img src=" + news.img + ">" + "<p>" + news.description + "</p>" + "</div>");
        });
    }
})