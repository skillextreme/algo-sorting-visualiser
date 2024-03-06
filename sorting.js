document.addEventListener('DOMContentLoaded', () => {
    const generateArrayBtn = document.getElementById('generateArrayBtn');
    generateArrayBtn.addEventListener('click', generateNewArray);
    generateNewArray(); // Generate an initial array of bars on page load
});

function generateNewArray(numberOfElements) {
    const arrayBars = document.getElementById('arrayBars');
    arrayBars.innerHTML = ''; // Clear existing bars
    for (let i = 0; i < numberOfElements; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${Math.floor(Math.random() * 101) * 5}px`; // Adjusted for visualization
        arrayBars.appendChild(bar);
    }
}

function createBars(array) {
    const arrayBars = document.getElementById('arrayBars');
    arrayBars.innerHTML = ''; // Clear existing bars before creating new ones
    array.forEach(height => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${height * 5}px`; // Scale height, adjust scaling factor as needed
        arrayBars.appendChild(bar);
    });
}

function swap(el1, el2) {
    const height1 = window.getComputedStyle(el1).getPropertyValue("height");
    const height2 = window.getComputedStyle(el2).getPropertyValue("height");

    el1.style.height = height2;
    el2.style.height = height1;
}

