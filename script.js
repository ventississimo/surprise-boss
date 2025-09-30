// Staggered animations: Add delays to elements based on data-delay attribute
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-element');
    
    elements.forEach(element => {
        const delay = element.getAttribute('data-delay') || 0;
        element.style.animationDelay = delay + 's';
        
        // For polaroids, set rotation vars if needed
        if (element.classList.contains('top-left')) {
            element.style.setProperty('--initial-rotate', '-5deg');
            element.style.setProperty('--final-rotate', '-3deg');
        } else if (element.classList.contains('top-right')) {
            element.style.setProperty('--initial-rotate', '5deg');
            element.style.setProperty('--final-rotate', '2deg');
        } else if (element.classList.contains('bottom-left')) {
            element.style.setProperty('--initial-rotate', '-8deg');
            element.style.setProperty('--final-rotate', '-5deg');
        } else if (element.classList.contains('bottom-right')) {
            element.style.setProperty('--initial-rotate', '8deg');
            element.style.setProperty('--final-rotate', '5deg');
        }
    });
});