// Import the flags data from the flags.js file
import { flags } from "./flags.js";

const container = document.getElementById("cardContainer");

flags.forEach((flag) => {
  // Create card structure
  const card = document.createElement("div");
  card.classList.add("card");

  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");

  const flagImg = document.createElement("img");
  flagImg.src = flag.imageUrl;
  flagImg.alt = `${flag.country} Flag`;

  const cardBack = document.createElement("div");
  cardBack.classList.add("card-back");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.textContent = flag.country;

  const flagLinks = document.createElement("a");
  flagLinks.href = flag.knowMore;
  flagLinks.target = `_blank`;

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.textContent = "Know More";

  // Append inner elements - front
  card.appendChild(cardFront);
  cardFront.appendChild(flagImg);

  // Append inner elements - back
  card.appendChild(cardBack);
  cardBack.appendChild(cardContent);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(flagLinks);
  flagLinks.appendChild(cardButton);

  // Append card to container
  container.appendChild(card);
});
