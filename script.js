
const markers = document.querySelectorAll('.marker');
const infoBox = document.getElementById('info-box');
const nombreEl = document.getElementById('negocio-nombre');
const precioEl = document.getElementById('negocio-precio');
const imgEl = document.getElementById('negocio-img');
const closeBtn = document.getElementById('close-btn');

markers.forEach(marker => {
    marker.addEventListener('click', () => {
        const name = marker.getAttribute('data-name');
        const price = marker.getAttribute('data-price');
        const img = marker.getAttribute('data-img');

        nombreEl.textContent = name;
        precioEl.textContent = price;
        imgEl.src = img;

        infoBox.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => {
    infoBox.classList.add('hidden');
});
