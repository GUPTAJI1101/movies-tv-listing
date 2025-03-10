export const btnScroll = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const movieContainer = document.getElementById("movieContainer");
      const seriesContainer = document.getElementById("seriesContainer")
      const leftScrollBtn = document.querySelector(".left-scroll-btn");
      const rightScrollBtn = document.querySelector(".right-scroll-btn");
      const leftSeriesBtn  = document.querySelector(".left-series-scroll-btn")
      const rightSeriesBtn = document.querySelector(".right-series-scroll-btn")
  
      const scrollAmt = 300; 
      
      leftScrollBtn.addEventListener("click", () => {
        movieContainer.scrollBy({ left: -scrollAmt, behavior: "smooth" });
      });
  
      rightScrollBtn.addEventListener("click", () => {
        movieContainer.scrollBy({ left: scrollAmt, behavior: "smooth" });
      });

      leftSeriesBtn.addEventListener("click", () => {
        seriesContainer.scrollBy({ left: -scrollAmt, behavior: "smooth" });
      });
  
      rightSeriesBtn.addEventListener("click", () => {
        seriesContainer.scrollBy({ left: scrollAmt, behavior: "smooth" });
      });

    });
  };


  