const tiltBox = document.querySelector('.first-img');
let tiltX = 0;
let tiltY = 0;

const updateTilt = (e) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get mouse position relative to the viewport
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get the percentage of the mouse position within the viewport
    const percentX = (mouseX / viewportWidth) * 2 - 1; // Range: -1 to 1
    const percentY = (mouseY / viewportHeight) * 2 - 1; // Range: -1 to 1

    // Define the tilt limits (adjust as needed)
    const maxTilt = 30; // Adjusted for moderate tilting

    // Calculate the tilt for X and Y axes
    tiltX = -maxTilt * percentY; // Invert Y-axis
    tiltY = maxTilt * percentX;  // Invert X-axis

    // Calculate shadow offset (adjust the multiplier for stronger/weaker shadows)
    const shadowX = percentX * 20; // Adjust for horizontal shadow
    const shadowY = percentY * 20; // Adjust for vertical shadow

    // Calculate shadow blur based on tilt strength (increase with tilt)
    const shadowBlur = Math.abs(tiltX) + Math.abs(tiltY); // Combine tilt for more blur

    // Apply the tilt and dynamic shadow with black color
    requestAnimationFrame(() => {
        tiltBox.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        tiltBox.style.boxShadow = `${-shadowX}px ${-shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.75)`; // Apply black shadow
    });
};

document.addEventListener('mousemove', updateTilt);

document.addEventListener('mouseleave', () => {
    // Reset tilt and shadow when the mouse leaves the page
    tiltBox.style.transform = 'rotateX(0deg) rotateY(0deg)';
    tiltBox.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'; // Reset shadow
});