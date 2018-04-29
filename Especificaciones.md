# Objectiu final: Realitzar una aplicació web de notícies que, en fer scroll fins abaix, recarregui més notícies amb html, , JSON, jQuery i Bootstrap.


Abans de començar:

Es recomana l'ús d'un quadern per fer un disseny i el seguiment del desenvolupament de l'aplicació. .

Per disssenyar i programar primer ho feim al quadern, i quan ho tenim clar, es traduiex a l'ordinador.


#Especificacions del client:

    -La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.
    -Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot -altre diseny és lliure.
    -Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime)
    -Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.

#Tasques:

    -Realitza la maquetació del projecte. Entrega un breu document amb l'análisi i la planificació (molt important, aquesta planificació s'ha de cumplir) al README.md (valen fotos d'esquemes del quadern).
        (fins a 1 punts).
    -Presenta news.html amb 3 notícies (ja escrites al html, no carregar amb js) i emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.
        (fins a 2 punts)
    -Codifica news.js en jQuery per fer: "botó carregar més notícies" i "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)
        (fins a 1 punt)
    -Inclou rss.xml (especificat al següent tema)
        (fins a 1 punt)
    -Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html 
        (fins a 1 punt)
    -La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de youtube responsive. 
        (fins a 1 punt)
    -Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina. 
        (fins a 1 punt)

## Fins a + 2 punts: acabat final (o dit d'un altra forma: complir les especificacions del client o donar solucions elegants alternatives)
