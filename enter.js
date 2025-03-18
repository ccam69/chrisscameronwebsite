document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("grid-container");
    const numImages = 15; 
    const imageURL = "/imgs/bg-img-1.png"; 

  
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenArea = screenWidth * screenHeight;


    const minImageSize = 300; 
    const maxImageSize = 800;

    let totalAreaCovered = 0; 

    for (let i = 0; i < numImages; i++) {
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("grid-item");

        const img = document.createElement("img");
        img.src = imageURL;

        const size = Math.random() * (maxImageSize - minImageSize) + minImageSize;
        totalAreaCovered += size * size;

        const xPosition = Math.random() * (screenWidth - size); 
        const yPosition = Math.random() * (screenHeight - size); 

        imgWrapper.style.width = `${size}px`;
        imgWrapper.style.height = `${size}px`;
        imgWrapper.style.left = `${xPosition}px`;  
        imgWrapper.style.top = `${yPosition}px`;  

        imgWrapper.appendChild(img);
        container.appendChild(imgWrapper);
    }

});
