function highlightCard(card) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value || !email.value || !message.value) {
        alert('Mohon lengkapi semua kolom.');
        return false;
    }
    alert('Pesan berhasil dikirim!');
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeButton = document.querySelector('.close-button');

    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'flex'; 
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});