async function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    try {
        const res = await fetch('data/testimonials.json');
        if (!res.ok) throw new Error('Network error');
        const items = await res.json();

        const visible = items.slice(0, 15);

        visible.forEach(item => {
            const card = document.createElement('article');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <p>"${item.comment}"</p>
                <h3>${item.name}</h3>
                <small>${item.role} • ${item.city}</small>
                <div class="meta">${item.date}</div>
            `;
            container.appendChild(card);
        });

        startAutoScroll(container);

    } catch (err) {
        container.innerHTML = '<p>Could not load testimonials.</p>';
        console.error(err);
    }
}

function startAutoScroll(container) {
    let scrollAmount = 0;
    const scrollStep = container.offsetWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setInterval(() => {
        if (scrollAmount >= maxScroll) {
            scrollAmount = 0;
        } else {
            scrollAmount += scrollStep;
        }
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }, 7000);
}

document.addEventListener('DOMContentLoaded', loadTestimonials);
