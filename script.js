function changeLanguage() {
  const language = document.getElementById('language-select').value;

  if (language === 'fr') {
    // Changer le texte en français
    document.getElementById('brand-name').innerText = "Le Manteau Rouge";
    document.getElementById('home-link').innerText = "Accueil";
    document.getElementById('catalogue-link').innerText = "Catalogue";
    document.getElementById('cart-link').innerText = "Panier";
    document.getElementById('language-label').innerText = "Choisir la langue: ";
    document.getElementById('main-title').innerText = "Le Manteau Rouge";
    document.getElementById('slogan').innerText = "Le style élégant, pour toutes les occasions.";
    document.getElementById('product1-title').innerText = "Manteau d'hiver";
    document.getElementById('product1-description').innerText = "Un manteau chaud pour les froides journées d'hiver.";
    document.getElementById('product2-title').innerText = "Manteau de pluie";
    document.getElementById('product2-description').innerText = "Un manteau imperméable pour affronter la pluie avec style.";
    document.getElementById('product3-title').innerText = "Veste en laine";
    document.getElementById('product3-description').innerText = "Veste en laine pour un look casual et élégant.";
    document.getElementById('footer-text').innerText = "&copy; 2024 Le Manteau Rouge - Tous droits réservés";
  } else if (language === 'en') {
    // Changer le texte en anglais
    document.getElementById('brand-name').innerText = "The Red Coat";
    document.getElementById('home-link').innerText = "Home";
    document.getElementById('catalogue-link').innerText = "Catalogue";
    document.getElementById('cart-link').innerText = "Cart";
    document.getElementById('language-label').innerText = "Choose language: ";
    document.getElementById('main-title').innerText = "The Red Coat";
    document.getElementById('slogan').innerText = "Elegant style for every occasion.";
    document.getElementById('product1-title').innerText = "Winter Coat";
    document.getElementById('product1-description').innerText = "A warm coat for cold winter days.";
    document.getElementById('product2-title').innerText = "Rain Coat";
    document.getElementById('product2-description').innerText = "A waterproof coat to face the rain in style.";
    document.getElementById('product3-title').innerText = "Wool Jacket";
    document.getElementById('product3-description').innerText = "Wool jacket for a casual and elegant look.";
    document.getElementById('footer-text').innerText = "&copy; 2024 The Red Coat - All rights reserved";
  }
}

// Appliquer la langue par défaut (français) au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  changeLanguage();
});

// Vider le localStorage à chaque connexion
localStorage.clear();  // Cela vide TOUT le localStorage

// OU, si tu veux juste enlever un élément spécifique (comme la popup vue)
localStorage.removeItem('popupSeen');

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container");

  // Exemple : changer la taille en cliquant
  videoContainer.addEventListener("click", () => {
      videoContainer.style.width = "500px";
      videoContainer.style.height = "300px";
  });
});




//   // Afficher la popup à l'ouverture de la page
//   window.addEventListener('load', function() {
//     document.getElementById('event-popup').style.display = 'flex';
//   });

//   // Fermer la popup au clic sur le bouton "OK"
//   document.getElementById('close-popup').addEventListener('click', function() {
//     document.getElementById('event-popup').style.display = 'none';
//   });


//  // Afficher la popup à l'ouverture de la page si elle n'a pas été vue
//  window.addEventListener('load', function() {
//   if (!localStorage.getItem('popupSeen')) {
//     const popup = document.getElementById('event-popup');
//     popup.style.display = 'flex';

//     // Fermer automatiquement après 5 secondes
//     setTimeout(function() {
//       popup.style.display = 'none';
//     }, 5000);

//     // Enregistrer dans le localStorage que la popup a été vue
//     localStorage.setItem('popupSeen', 'true');
//   }
// });

// // Fermer la popup au clic sur le bouton "OK"
// document.getElementById('close-popup').addEventListener('click', function() {
//   document.getElementById('event-popup').style.display = 'none';
// });