// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.circle');
    const circleRect = circle.getBoundingClientRect();
    const circleCenterX = circleRect.left + circleRect.width / 2;
    const circleCenterY = circleRect.top + circleRect.height / 2;

    document.addEventListener('mousemove', (event) => {
        // Get the mouse position
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Calculate the difference between mouse and circle center
        const deltaX = mouseX - circleCenterX;
        const deltaY = mouseY - circleCenterY;

        // Subtle tilt factors
        const rotateX = deltaY * 0.03; // Reduced tilting
        const rotateY = deltaX * -0.03;

        // Create a more subtle shadow direction
        const shadowX = deltaX * -0.05; // Subtle inverse X direction
        const shadowY = deltaY * -0.05; // Subtle inverse Y direction
        const shadowBlur = 10; // Reduced blur for the shadow
        const shadowColor = 'rgba(0, 0, 0, 0.2)'; // Lighter and more transparent shadow

        // Apply the tilt to the circle
        circle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // Apply the more subtle shadow
        circle.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`;
    });
});