// Get current year for copyright
let currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get last modified date of the document
let lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;