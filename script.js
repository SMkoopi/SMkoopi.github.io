const images = [
    // Amber
    { src: "bilder/amber/bild1.jpg", category: "amber", isChara: true, title: "Amber 1" },
    { src: "bilder/amber/bild2.jpg", category: "amber", isChara: true, title: "Amber 2" },

    // Violet
    { src: "bilder/violet/bild1.jpg", category: "violet", isChara: true, title: "Violet 1" },

    // Vanessa
    { src: "bilder/vanessa/bild1.jpg", category: "vanessa", isChara: true, title: "Vanessa 1" },

    // Lena
    { src: "bilder/lena/bild1.jpg", category: "lena", isChara: true, title: "Lena 1" },

    // Drawings
    { src: "bilder/drawings/skizze1.jpg", category: "drawings", isChara: false, title: "Skizze 1" }
];

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

function selectFolder(folderKey) {
    const titleMap = {
        'all': 'All Werke',
        'chara-all': 'All Characters',
        'amber': 'Folder: Amber',
        'violet': 'Folder: Violet',
        'vanessa': 'Folder: Vanessa',
        'lena': 'Folder: Lena',
        'drawings': 'Folder: Drawings'
    };

    document.getElementById('current-folder-name').innerText = titleMap[folderKey] || 'Gallery';
    renderGallery(folderKey);
}

function renderGallery(categoryFilter) {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';

    images.forEach(imgData => {
        let show = false;

        if (categoryFilter === 'all') {
            show = true;
        } else if (categoryFilter === 'chara-all' && imgData.isChara) {
            show = true;
        } else if (imgData.category === categoryFilter) {
            show = true;
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

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
