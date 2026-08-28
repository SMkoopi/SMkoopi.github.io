// Deine Bilder-Datenbank
const images = [
    // --- AMBER ---
    { src: "bilder/amber/bild1.jpg", category: "amber", isChara: true, title: "Amber 1" },
    { src: "bilder/amber/bild2.jpg", category: "amber", isChara: true, title: "Amber 2" },

    // --- VIOLET ---
    { src: "bilder/violet/bild1.jpg", category: "violet", isChara: true, title: "Violet 1" },

    // --- VANESSA ---
    { src: "bilder/vanessa/bild1.jpg", category: "vanessa", isChara: true, title: "Vanessa 1" },

    // --- LENA ---
    { src: "bilder/lena/bild1.jpg", category: "lena", isChara: true, title: "Lena 1" },

    // --- EIGENE ZEICHNUNGEN ---
    { src: "bilder/drawings/skizze1.jpg", category: "drawings", isChara: false, title: "Eigene Skizze 1" },
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
        let show = false;

        if (categoryFilter === 'all') {
            show = true;
        } else if (categoryFilter === 'chara-all' && imgData.isChara) {
            show = true; // Zeigt alle Charaktere auf einmal (Amber, Violet, Vanessa, Lena)
        } else if (imgData.category === categoryFilter) {
            show = true; // Zeigt exakt die ausgewählte Unterkategorie
        }

        if (show) {
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
function filterGallery(category, evt) {
    document.querySelectorAll('.filter-btn, .sub-btn').forEach(btn => btn.classList.remove('active'));
    if (evt && evt.target) {
        evt.target.classList.add('active');
    }
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
