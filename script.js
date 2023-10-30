const phrases = ["chatting over fast food.", "forecasting.", "visiting family."];
let phraseIndex = 0;
let textIndex = 0;
let isDeleting = false;

const typeText = () => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        if (textIndex >= 0) {
            document.getElementById("typed-output").textContent = currentPhrase.slice(0, textIndex);
            textIndex--;
        }

        if (textIndex < 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            textIndex = 0; // Reset the textIndex immediately after switching modes
            setTimeout(typeText, 200);
            return;
        }
    } else {
        if (textIndex <= currentPhrase.length) {
            document.getElementById("typed-output").textContent = currentPhrase.slice(0, textIndex);
            textIndex++;
        }

        if (textIndex > currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeText, 1000);
            return;
        }
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeText, typingSpeed);
};

// Initialize the typing effect once the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    typeText();
});
