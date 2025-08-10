async function loadTestimonials() {
    const container = document.getElementById('testimonials-container');

    try {
    const response = await fetch('data/testimonials.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const testimonials = await response.json();

    testimonials.forEach(t => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial-card';

        testimonialDiv.innerHTML = `
        <p>"${t.comment}"</p>
        <h3>${t.name}</h3>
        <small>${t.role}</small>
        `;

        container.appendChild(testimonialDiv);
    });

    } catch (error) {
    container.innerHTML = '<p>Sorry, testimonials could not be loaded at this time.</p>';
    console.error('Error loading testimonials:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadTestimonials);
