let contador = 0;


$(document).ready(function () {
    $("embed-responsive-item").hide();
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
                $("#newNews").append("<div id=\"noticiaCargada\" class=\"row featurette\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<div class=\"col-md-7\">" + "<h1 class=\"featurette-heading>\"" + news.title +
                    "</h1>" + "<br>" + "<p class=\"lead\">" + news.description + "</p>" + "</div" +
                    "<div class=\"col-md-5\">" +
                    "<img src=" + news.img + " class=\"featurette-image img-fluid mx-auto\" style=\"width: 500px; height: 500px;\" " + ">" +
                    "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Leer más</button>" +
                    "</div> </div>");
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
                $("#newNews").append("<div id=\"noticiaCargada\" class=\"row featurette\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<div class=\"col-md-7\">" + "<h1 class=\"featurette-heading>\"" + news.title +
                    "</h1>" + "<br>" + "<p class=\"lead\">" + news.description + "</p>" + "</div" +
                    "<div class=\"col-md-5\">" +
                    "<img src=" + news.img + " class=\"featurette-image img-fluid mx-auto\" style=\"width: 500px; height: 500px;\" " + ">" +
                    "<button type=button class=\"btn btn-info btn-lg nuevaNoticia \" data-indice=" + news.indice + ">Leer más</button>" +
                    "</div> </div>");
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
        let imagen, titulo, descripcion, noticia;
        if (indice < 3) {
            $.getJSON("../DATA/1.json", function (jsonObject) {
                $.each(jsonObject, function (i, news) {
                    if (news.indice == indice) {
                        imagen = news.img;
                        titulo = news.title;
                        descripcion = news.description;
                        noticia = "<div id=\"noticiaCargada\" class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                            "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                            "</div>";
                    }
                });
                $("#news").append(noticia);
                $("embed-responsive-item").show();
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
                        noticia = "<div id=\"noticiaCargada\" class=\"col-sm-12\" style=\"background-color:lavenderblush;\" + " + i + ">" + "<h1>" + news.title +
                            "</h1>" + "<br>" + "<img src=" + news.img + " class=\"col-sm-12\" style=\"background-color:lavenderblush;\" " + ">" + "<p>" + news.description + "</p>" +
                            "</div>";
                    }
                });
                $("#news").append(noticia);
                $("embed-responsive-item").show();
                cambiarMeta(imagen, descripcion, titulo);
            });
        }
    }

    function cambiarMeta(imagen, titulo, descripcion) {
        $("meta[property='og:image']").setAttribute(("content", imagen));
        $("meta[property='og:title']").setAttribute(("content", titulo));
        $("meta[property='og:description']").setAttribute(("content", descripcion));
    }

    $(window).on("scroll", function () {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            pintarJson();
        }
    });
});






