// Exemple d'ajout au panier (fonctionnalité simulée)
document.querySelectorAll('#ajouter-panier').forEach(button => {
    button.addEventListener('click', function() {
      alert('Produit ajouté au panier');
    });
  });

  // Contenus en français et en anglais
const translations = {
  fr: {
    titrePrincipal: "Le Manteau Rouge",
    accroche: "Chez nous, on adore quand le <span>SunShine</span>",
    produit1: "Manteau d'hiver",
    produit1Description: "Un manteau chaud pour les froides journées d'hiver.",
    produit2: "Manteau de pluie",
    produit2Description: "Un manteau imperméable pour affronter la pluie avec style.",
    panierButton: "Ajouter au panier",
    footer: "&copy; 2024 Le Manteau Rouge - Tous droits réservés"
  },
  en: {
    titrePrincipal: "The Red Coat",
    accroche: "We love when the <span>SunShine</span>",
    produit1: "Winter Coat",
    produit1Description: "A warm coat for the cold winter days.",
    produit2: "Rain Coat",
    produit2Description: "A waterproof coat to face the rain in style.",
    panierButton: "Add to Cart",
    footer: "&copy; 2024 The Red Coat - All rights reserved"
  }
};

// Fonction pour changer la langue
function changeLanguage() {
  const language = document.getElementById("language-select").value;
  
  // Appliquer les traductions
  document.querySelector(".titre-principal").innerHTML = translations[language].titrePrincipal;
  document.querySelector(".accroche").innerHTML = translations[language].accroche;
  
  document.querySelectorAll(".produit-titre")[0].innerHTML = translations[language].produit1;
  document.querySelectorAll(".produit-description")[0].innerHTML = translations[language].produit1Description;
  
  document.querySelectorAll(".produit-titre")[1].innerHTML = translations[language].produit2;
  document.querySelectorAll(".produit-description")[1].innerHTML = translations[language].produit2Description;
  
  document.querySelectorAll(".ajouter-panier").forEach(button => {
    button.innerHTML = translations[language].panierButton;
  });

  document.querySelector(".footer-text").innerHTML = translations[language].footer;
}

// Initialisation pour la langue par défaut (français)
document.addEventListener("DOMContentLoaded", function () {
  changeLanguage();
});

  