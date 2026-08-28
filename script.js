// Hier trägst du deine Bilder ein:
const images = [
    { src: "bilder/bild1.jpg", category: "chara", title: "Charakter 1" },
    { src: "bilder/bild2.jpg", category: "skizzen", title: "Skizze 1" },
    { src: "bilder/bild3.jpg", category: "concepts", title: "Concept Art" },
    // Neue Bilder fügst du einfach hier unten an!
];

// Age-Gate Logik
function confirmAge(isAdult) {
    if (isAdult) {
        document.getElementById('age-gate').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        renderGallery('all');
    } else {
        alert("Zugriff verweigert.");
        window.location.href = "https://www.google.com";
    }
}

// Galerie Rendern
function renderGallery(categoryFilter) {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';

    images.forEach(imgData => {
        if (categoryFilter === 'all' || imgData.category === categoryFilter) {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.onclick = () => openLightbox(imgData.src);

            const img = document.createElement('img');
            img.src = imgData.src;
            img.alt = imgData.title;

            item.appendChild(img);
            galleryContainer.appendChild(item);
        }
    });
}

// Filter steuern
function filterGallery(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderGallery(category);
}

// Lightbox Logik
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}