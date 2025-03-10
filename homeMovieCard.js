const movieContainer = document.querySelector("#movieContainer");
const movieTemplate = document.querySelector("#movieTemplate");


export const showMovieContainer = (movie) => {
    movie.forEach((curElem) => {
        const { id, name, category, description, img, price } = curElem;
        const movieClone = document.importNode(movieTemplate.content, true);

        movieClone.querySelector(".movieName").textContent = name;
        movieClone.querySelector(".movieDescription").textContent = description;
        movieClone.querySelector(".category").textContent = category;
        movieClone.querySelector(".movieImage").src = img;
        movieClone.querySelector(".movieImage").alt = name;
        

        movieContainer.append(movieClone);
    });
};
