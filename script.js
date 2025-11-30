document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productsGrid");

  // Exemple de produit pour la démo
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/250x250",
      name: "Figurine Naruto",
      price: "29,99 €",
      link_affiliation: "https://lien-affiliation.com/produit-naruto",
      link_detail: "https://lien-detail.com/produit-naruto"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/250x250",
      name: "Figurine Luffy",
      price: "34,99 €",
      link_affiliation: "https://lien-affiliation.com/produit-luffy",
      link_detail: "https://lien-detail.com/produit-luffy"
    }
  ];

  // Dynamique affichage des produits
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.price}</p>
      <a href="${product.link_affiliation}" class="btn-acheter" target="_blank">Acheter</a>
      <a href="${product.link_detail}" class="btn-detail" target="_blank">Détails</a>
    `;
    grid.appendChild(card);
  });
});
