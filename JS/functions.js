$(document).ready(function(){

$.getJSON( "../NEWS/news1.json", function( jsonObject ) {
    //en aquest punt l'objecte jsonObject correspon al fitxer
    pintar( jsonObject );
  });
  
  function pintar(json){
   $.each( json, function( i, news ) {
    $("#news").append( "<div'" + i + "'>" + "<h1>" + news.title + "</h1>" + "<br>" + "<p>" + news.description + "</p>"+ "</div>" );
   });
  }

});