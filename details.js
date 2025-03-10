export const details = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const data = JSON.parse(localStorage.getItem("selectedCard"));

        const imageElement = document.getElementById("details-image");
        const nameElement = document.getElementById("details-name");
        const descriptionElement = document.getElementById("details-description");
        const priceElement = document.getElementById("details-price");

        if (imageElement) {
            imageElement.src = data.image;
            imageElement.alt = data.name || "Image Not Available"
        } 

        if (nameElement) nameElement.textContent = data.name || "name not available"
        if (descriptionElement) descriptionElement.textContent = data.description || "description not available"
        if (priceElement) priceElement.textContent = `Price: $69 (per year)` 
    });
};


