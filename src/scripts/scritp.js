// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');
    const photos = [
        { src: 'src/assets/1.jpg', description: 'Descripción de la foto 1' },
        { src: 'src/assets/2.jpg', description: 'Descripción de la foto 2' },
        { src: 'src/assets/3.jpg', description: 'Descripción de la foto 3' },
        { src: 'src/assets/4.jpg', description: 'Descripción de la foto 4' },
        { src: 'src/assets/5.jpg', description: 'Descripción de la foto 5' },
        { src: 'src/assets/6.jpg', description: 'Descripción de la foto 6' }
        // Añade aquí más objetos de fotos según sea necesario
    ];

    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');

        const description = document.createElement('div');
        description.classList.add('photo-description');
        description.textContent = photo.description;

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.description;

        photoDiv.appendChild(description);
        photoDiv.appendChild(img);
        galleryContainer.appendChild(photoDiv);
    });
});