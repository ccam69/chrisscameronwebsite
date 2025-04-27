document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("grid-container"); // Use the existing grid-container
    const numImages = 15; // Maximum number of images
    const imageURL = "/imgs/bg-img-1.png"; // Path to the background image

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenArea = screenWidth * screenHeight;

    const minImageSize = 100; // Minimum size of an image
    const maxImageSize = 400; // Maximum size of an image

    let totalAreaCovered = 0; // Track the total area covered by images

    for (let i = 0; i < numImages; i++) {
        // Stop adding images if the total area covered exceeds 80% of the screen area
        if (totalAreaCovered / screenArea > 0.8) break;

        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("grid-item");

        const img = document.createElement("img");
        img.src = imageURL;

        // Randomize the size of the image
        const size = Math.random() * (maxImageSize - minImageSize) + minImageSize;
        const area = size * size;

        // Check if adding this image exceeds the 80% limit
        if ((totalAreaCovered + area) / screenArea > 0.8) break;

        totalAreaCovered += area;

        // Randomize the position of the image
        const xPosition = Math.random() * (screenWidth - size);
        const yPosition = Math.random() * (screenHeight - size);

        // Apply styles to the image wrapper
        imgWrapper.style.position = "absolute";
        imgWrapper.style.width = `${size}px`;
        imgWrapper.style.height = `${size}px`;
        imgWrapper.style.left = `${xPosition}px`;
        imgWrapper.style.top = `${yPosition}px`;
        imgWrapper.style.zIndex = 0; // Ensure it stays behind other elements

        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";

        imgWrapper.appendChild(img);
        container.appendChild(imgWrapper);
    }
});