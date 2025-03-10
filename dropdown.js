export const dropdown = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const category = item.getAttribute("data-category")?.toLowerCase();

        const cards = document.querySelectorAll(".cards");

        cards.forEach((card) => {
          const movieCategory = card.querySelector(".category")?.textContent.toLowerCase();

          if (movieCategory === category || category === "all") {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
};
