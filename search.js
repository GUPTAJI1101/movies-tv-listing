
export const  search = () => {
   document.addEventListener("DOMContentLoaded", () => {
       const searchInput = document.getElementById("search-input");
       const searchButton  = document.getElementById("search");

       searchButton.addEventListener("click", () => {
          const query = searchInput.value.trim().toLowerCase()

          if(!query) {
            alert("please enter category or name");
            return;
          }

          const cards = document.querySelectorAll(".cards");

          cards.forEach(card => {
            const category = card.querySelector(".category")?.textContent.toLowerCase();
            const name = card.querySelector('.movieName, .seriesName')?.textContent.toLowerCase();

            if (category?.includes(query) || name?.includes(query)) {
              card.style.display = 'block'; 
            } else {
              card.style.display = 'none'; 
            }

          })

       })


   })
} 