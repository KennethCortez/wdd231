document.getElementById('helpForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const modal = document.getElementById('thankYouModal');
    modal.style.display = 'flex';

    setTimeout(() => {
        window.location.href = 'about.html';
    }, 5000);
});


document.getElementById('closeModal').addEventListener('click', function() {
    // Close the modal and redirect to about.html
    window.location.href = 'about.html';
});
