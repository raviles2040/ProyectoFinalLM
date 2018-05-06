$(document).ready(function(){

$.getJSON( "../NEWS/news1.json", function( jsonObject ) {
    //en aquest punt l'objecte jsonObject correspon al fitxer
    pintar( jsonObject );
  });
  
  function pintar(json){
   $.each( json, function( i, news ) {
    $("#news").append( "<li id='" + i + "'>" + news.title + " " + news.description + "</li>" );
   });
  }

});