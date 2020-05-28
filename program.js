/*var message="Welcome to Magali's Resume"//variable qui sert a mettre des elements en mémoire
alert(message); //affiche cette alerte lorsque l'on clique sur le lien de la page web
/*si on souhaite ajouter des commentaires
sur plusieurs
lignes*/
//pour faire un commentaire sur une seule ligne

var mapElement = document.getElementById('map');

// Paramétrage de la carte
var mapOptions = {
  zoom: 13,
  center: {
    lat: 49.116888, 
    lng: 2.368335
  }
};

// Création de la carte
function initMap() {
    new google.maps.Map(mapElement, mapOptions);
  }
  
//deroulant
