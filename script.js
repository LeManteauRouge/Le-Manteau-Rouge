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
    document.getElementById('footer-text').innerHTML = "&copy; 2024 Le Manteau Rouge - Tous droits réservés"; // Utilisation de innerHTML pour afficher le copyright
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
    document.getElementById('footer-text').innerHTML = "&copy; 2024 The Red Coat - All rights reserved"; // Utilisation de innerHTML pour afficher le copyright
  }
}

// Appliquer la langue par défaut (français) au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  changeLanguage();
});
