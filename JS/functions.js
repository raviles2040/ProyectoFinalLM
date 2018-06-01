let contador = 0;


$(document).ready(function () {
    $("#video").hide();
    $("#curiosidades").click(function random() {
        var random = Math.floor((Math.random() * 10) + 1);
        if (random >= 5) {
            window.location.href = "../HTML/news2.html"
        }
        else {
            window.location.href = "../HTML/news3.html"
        }
    });

    $("#leerMas").click(function () {
        pintarJson();
    });
    $("#noticiaCompleta1").click(function () {
        window.location.href = "../HTML/news1.html"
    });
    $("#noticiaCompleta2").click(function () {
        window.location.href = "../HTML/news2.html"
    });
    $("#noticiaCompleta3").click(function () {
        window.location.href = "../HTML/news3.html"
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
                console.log(news)
                $("#newNews").append("<div id=\"noticiaCargada\" class=\"row featurette\" > <div class=\"col-md-7\">" + "<h2 class=\"featurette-heading\">" + news.title +
                    "</h2>" + "<p class=\"lead\">" + news.miniDescripcion + "</p>" +
                    "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Noticia Completa</button>" + "</div>" +
                    "<div class=\"col-md-5\">" + "<img src=" + news.img + "  class=\"featurette-image img-fluid mx-auto\">" + "</div>" +
                    "</div> </div>  +  <hr class=\"featurette-divider\">");
                $("#newNews").on('click', 'button.nuevaNoticia', function () {
                    let indiceNoticia = $(this).data("indice");
                    let indice = parseInt(indiceNoticia)
                    $("#newNews").hide();
                    volcarNoticia(indice);
                })
            })
            contador++;
        });
    }

    function imprimirTresUltimasNoticias() {
        $.getJSON("../DATA/2.json", function (jsonObject) {
            $.each(jsonObject, function (i, news) {
                console.log(news)
                $("#newNews").append("<div id=\"noticiaCargada\" class=\"row featurette\" > <div class=\"col-md-7\">" + "<h2 class=\"featurette-heading\">" + news.title +
                    "</h2>" + "<p class=\"lead\">" + news.miniDescripcion + "</p>" +
                    "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Noticia Completa</button>" + "</div>" +
                    "<div class=\"col-md-5\">" + "<img src=" + news.img + "  class=\"featurette-image img-fluid mx-auto\">" + "</div>" +
                    "</div> </div>  +  <hr class=\"featurette-divider\">");
                $("#newNews").on('click', 'button.nuevaNoticia', function () {
                    let indiceNoticia = $(this).data("indice");
                    let indice = parseInt(indiceNoticia)
                    $("#newNews").hide();
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
        let imagen, titulo, descripcion, noticia;
        if (indice < 3) {
            $.getJSON("../DATA/1.json", function (jsonObject) {
                $.each(jsonObject, function (i, news) {
                    if (news.indice == indice) {
                        imagen = news.img;
                        titulo = news.title;
                        descripcion = news.description;
                        noticia = "<div id=\"noticiaCargada\" class=\"row featurette\" > <div class=\"col-md-8\" style=\"margin:auto;\">" + "<h2 class=\"featurette-heading>\"" + news.title +
                            "</h2>" + "<div class\"col-md-12\" style=\"text-align:center;\">" + "<img src=" + news.img + " class=\"featurette-image img-fluid mx-auto\">" + "</div>" + "<p class=\"lead\">" + news.description + "</p>" + "</div" +
                            "<div class=\"col-md-5\">" +
                            "</div> </div>";
                    }
                });
                $("#news").append(noticia);
                $("video").show();
                cambiarMeta(imagen, descripcion, titulo);

            });
        }
        else {
            $.getJSON("../DATA/2.json", function (jsonObject) {
                $.each(jsonObject, function (i, news) {
                    if (news.indice == indice) {
                        imagen = news.img;
                        titulo = news.title;
                        descripcion = news.description;
                        noticia = "<div id=\"noticiaCargada\" class=\"row featurette\" > <div class=\"col-md-8\" style=\"margin:auto;\">" + "<h2 class=\"featurette-heading>\"" + news.title +
                            "</h2>" + "<div class\"col-md-12\" style=\"text-align:center;\">" + "<img src=" + news.img + " class=\"featurette-image img-fluid mx-auto\">" + "</div>" + "<p class=\"lead\">" + news.description + "</p>" + "</div" +
                            "<div class=\"col-md-5\">" +
                            "</div> </div>";
                    }
                });
                $("#news").append(noticia);
                $("video").show();
                cambiarMeta(imagen, descripcion, titulo);
            });
        }
    }

    function cambiarMeta(imagen, titulo, descripcion) {
        $("meta[property='og:image']").attr(("content", imagen));
        $("meta[property='og:title']").attr(("content", titulo));
        $("meta[property='og:description']").attr(("content", descripcion));
    }

    $(window).on("scroll", function () {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            pintarJson();
        }
    });
});






