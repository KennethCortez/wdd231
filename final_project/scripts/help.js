document.getElementById('helpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const modal = document.getElementById('thankYouModal');
    modal.style.display = 'flex';

    setTimeout(() => {
        const form = e.target;
        const params = new URLSearchParams(new FormData(form)).toString();
        window.location.href = 'form-action.html?' + params;
    }, 5000);
});

document.getElementById('closeModal').addEventListener('click', function() {
    const form = document.getElementById('helpForm');
    const params = new URLSearchParams(new FormData(form)).toString();
    window.location.href = 'form-action.html?' + params;
});
