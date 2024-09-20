window.onload = () => {
    const letters = document.querySelectorAll('.letter');
    const finalText = 'NotionCommunity'.split(''); // Final text to be displayed
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    letters.forEach((letter, index) => {
        let randomScrollInterval;

        // Start with random letters scrolling
        randomScrollInterval = setInterval(() => {
            const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
            letter.innerText = randomChar;
        }, 100); // Change random letter every 100ms

        // Gradually reveal the letters by applying scroll and fade-in
        setTimeout(() => {
            letter.style.opacity = '1';  // Fade in
            letter.style.transform = 'translateY(0)';  // Scroll up to the final position
        }, index * 200); // Delay each letter for the wave-like effect

        // After a delay, stop on the correct letter
        setTimeout(() => {
            clearInterval(randomScrollInterval); // Stop the random scroll
            letter.innerText = finalText[index];  // Set the correct letter
        }, 2000 + index * 200); // Delay each letter to give a wave-like effect
    });
};
