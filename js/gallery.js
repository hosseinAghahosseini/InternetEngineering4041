// گالری داینامیک
const galleryImages = [
    { src: "./assets/images/DSC_6834.jpg", alt: "Computer Engineering Department - Building View 1" },
    { src: "./assets/images/DSC_6948.jpg", alt: "Computer Engineering Department - Building View 2" },
    { src: "./assets/images/DSC_6950.jpg", alt: "Computer Engineering Department - Building View 3" },
    { src: "./assets/images/DSC_6834.jpg", alt: "University Campus - Outdoor" },
    { src: "./assets/images/DSC_6948.jpg", alt: "Faculty Members Gathering" },
    { src: "./assets/images/DSC_6950.jpg", alt: "Student Workshop Session" }
];

const galleryGrid = document.querySelector("#gallery-grid");

if (galleryGrid) {
    galleryImages.forEach(img => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
        galleryGrid.appendChild(item);
    });
    
    console.log(`✅ ${galleryImages.length} images loaded in gallery`);
}