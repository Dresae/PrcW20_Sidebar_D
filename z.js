document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = `${progress}%`;
        }, 300);
    });

    // Toggle sidebar
    const container = document.querySelector('.progress-container');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    toggleBtn.addEventListener('click', () => {
        container.classList.toggle('collapsed');
    });
});