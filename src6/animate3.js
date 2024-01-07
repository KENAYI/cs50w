document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');

    // Stop animation initially
    h1.style.animationPlayState  = 'paused';

    // Toggle animation on click
    document.querySelector('button').onclick = () => {
        if (h1.style.animationPlayState  === 'paused')
            h1.style.animationPlayState = 'running';
        else
            h1.style.animationPlayState  = 'paused';
    };
});