const seriesContainer = document.querySelector("#seriesContainer")
const seriesTemplate = document.querySelector("#seriesTemplate")


export const showSeriesContainer = (series) =>{
    if (!series) {
        return false
    }
    
    series.forEach((curElem) => {
        const {id,name,category,brand,price,stock,description,img} =curElem
        const seriesClone = document.importNode(seriesTemplate.content,true )

        seriesClone.querySelector(".seriesName").textContent = name
        seriesClone.querySelector(".seriesDescription").textContent = description
        // seriesClone.querySelector(".seriesPrice").textContent = `₹${price}` 
        // seriesClone.querySelector(".seriesActualPrice").textContent = `₹${price * 5}` 
        // seriesClone.querySelector(".seriesStock").textContent = stock
        seriesClone.querySelector(".category").textContent = category
        seriesClone.querySelector(".seriesImage").src = img
        seriesClone.querySelector(".seriesImage").alt = name

        seriesContainer.append(seriesClone)

    });
}