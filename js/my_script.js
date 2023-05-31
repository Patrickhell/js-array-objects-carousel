/**
 * Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1: Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
 */


const imagesDescription = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 

    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 

    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 

    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 

    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const carouselElement = document.querySelector("div.carouselObject");
imagesDescription.forEach((description) => {
    imageMustContain ( description.title, description.text, description.image, carouselElement);
});
function imageMustContain( title, text, image, container){
   container.innerHTML += 
`<div class="carousel-element">
    <img src="${image}" alt="${title}'s image">
    <div class="description">
         <h4 class="member-name">
            ${title}
         </h4>
         <p class="subtitle">
            ${text}
         </p>
    </div>
    
</div>`;
}


const imageList = [];
for (let i = 0 ; i < imagesDescription.length ;i++){
    const images = imagesDescription[i];
    for (let key in images){
        if (key =="image" ){
            imageList.push(imagesDescription[i].image);
            console.log (imageList);



let activeIndex = 4;
document.querySelectorAll("div.carousel-element") [activeIndex].classList.add("visible");

const previewButton = document.querySelector("div.preview");
previewButton.addEventListener("click", function(){
   if(activeIndex == 0) {
       activeIndex = imageList.length - 1 ;
   } else {
       activeIndex = activeIndex  - 1;
   }
   document.querySelector("div.carousel-element.visible").classList.remove("visible");
   document.querySelectorAll("div.carousel-element") [activeIndex].classList.add("visible");
});


const next = document.querySelector("div.next");
next.addEventListener("click", function(){
   if(activeIndex == imageList.length - 1 ) {
       activeIndex= 0 ;
   } else {
       activeIndex = activeIndex  + 1;
   }
   document.querySelector("div.carousel-element.visible").classList.remove("visible");
   document.querySelectorAll("div.carousel-element") [activeIndex].classList.add("visible");

});

        }
    }
}            





