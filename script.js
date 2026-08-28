const images = [
    // Amber
    { src: "bilder/SMkoopi-Seite/amber/bild1.png", category: "amber", isChara: true, title: "Amber 1" },
    { src: "bilder/SMkoopi-Seite/amber/bild2.png", category: "amber", isChara: true, title: "Amber 2" },

    // Violet
    { src: "bilder/SMkoopi-Seite/violet/bild1.png", category: "violet", isChara: true, title: "Violet 1" },

    // Vanessa
    { src: "C:\Users\smkoo\Pictures\SMkoopi-Seite\vanessa\bild1.png", category: "vanessa", isChara: true, title: "Vanessa 1" },

    // Lena
    { src: "bilder/SMkoopi-Seite/lena/bild1.png", category: "lena", isChara: true, title: "Lena 1" },

    // Drawings
    { src: "bilder/SMkoopi-Seite/drawings/skizze1.png", category: "drawings", isChara: false, title: "Skizze 1" }
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
