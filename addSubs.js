export const addSubs = () => {
  document.addEventListener("DOMContentLoaded", () => {
      const click = (container) => {
          const buttons = container.querySelectorAll(".add-to-cart-button");
          buttons.forEach((button) => {
              button.addEventListener("click", (e) => {
                  const card = e.target.closest(".cards");
                  const data = {
                      name: card.querySelector(".movieName, .seriesName").textContent,
                      image: card.querySelector(".movieImage, .seriesImage").src,
                      description: card.querySelector(".movieDescription, .seriesDescription").textContent,
                      price: card.querySelectorAll(".moviePrice, .seriesPrice").textContent,
                  };
                  localStorage.setItem("selectedCard", JSON.stringify(data));
                  window.location.href = "detail.html";
              });
          });
      };

      const movieContainer = document.getElementById("movieContainer");
      const seriesContainer = document.getElementById("seriesContainer");

      click(movieContainer);
      click(seriesContainer);
  });
};
