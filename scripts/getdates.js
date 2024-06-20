// getdates.js

// Get current year
let currentYear = new Date().getFullYear();

// Get last modified date of the document
let lastModifiedDate = document.lastModified;

// Update footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    let footer = document.querySelector('footer');
    if (footer) {
        // Update first paragraph with current year
        let firstParagraph = footer.querySelector('p:first-of-type');
        if (firstParagraph) {
            firstParagraph.textContent = `Copyright © ${currentYear}`;
        }

        // Update second paragraph with last modified date
        let secondParagraph = footer.querySelector('p:nth-of-type(2)');
        if (secondParagraph) {
            secondParagraph.textContent = `Last modified: ${lastModifiedDate}`;
        }
    }
});
