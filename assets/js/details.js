var modal = document.getElementsByClassName("modal")[0];
var span = document.getElementsByClassName("close")[0];
var container = document.getElementsByClassName("container")[0];

var image = document.getElementById("imageDetails");
var titre = document.getElementById("titreDetails");
var ingredients = document.getElementById("ingredientsDetails");
var prix = document.getElementById("prixDetails");

var containerArray = Array.from(container.getElementsByClassName("showBtn"));

var gateau = [
  {image: "../assets/img/gateau1.jpg",titre: "Gâteau au chocolat", ingredients: "Chocolat pâtissier, Beurre, Oeufs, Sucre en poudre, Farine", prix: "18€"},
  {image: "../assets/img/gateau2.jpg",titre: "Tarte au citron", ingredients: "Pâte brisée, Sucre, Beurre, Oeufs, Citron", prix: "18€"},
  {image: "../assets/img/gateau3.jpg",titre: "Fraisier", ingredients: "Fraises", prix: "18€"},
  {image: "../assets/img/gateau4.jpg",titre: "Gâteau au Yaourt", ingredients: "Yaourt", prix: "18€"},
  {image: "../assets/img/gateau5.jpg",titre: "Flan pâtissier", ingredients: "Flan", prix: "18€"},
  {image: "../assets/img/gateau6.jpg",titre: "Baba au rhum", ingredients: "Rhum", prix: "18€"},
  {image: "../assets/img/gateau7.jpg",titre: "Cheesecake", ingredients: "Cheese", prix: "18€"},
  {image: "../assets/img/gateau8.jpg",titre: "Clafoutis aux cerises", ingredients: "Cerises", prix: "18€"},
  {image: "../assets/img/gateau9.jpg",titre: "Tarte aux pommes", ingredients: "Pommes", prix: "18€"},
  {image: "../assets/img/gateau10.jpg",titre: "Gâteau Breton", ingredients: "Beurre", prix: "18€"}
];


function closeInfo() {
  modal.style.display = "none";
}

span.onclick = closeInfo;

containerArray.forEach((element,id) => {
  element.onclick = function() {
    modal.style.display = "block";
    image.src = gateau[id].image;
    titre.innerHTML = gateau[id].titre;
    ingredients.innerHTML = gateau[id].ingredients;
    prix.innerHTML = gateau[id].prix;
  }
});