document.addEventListener('DOMContentLoaded', () => {
    const generateArrayBtn = document.getElementById('generateArrayBtn');
    const numElementsSlider = document.getElementById('numElements');
    const sortSpeedSlider = document.getElementById('sortSpeed');

    generateArrayBtn.addEventListener('click', () => generateNewArray(numElementsSlider.value));
    generateNewArray(numElementsSlider.value); // Initial array generation with default slider value

    const bubbleSortBtn = document.getElementById('bubbleSortBtn');
    bubbleSortBtn.addEventListener('click', () => bubbleSort(calculateDelay()));
    
    const insertionSortBtn = document.getElementById('insertionSortBtn');
    insertionSortBtn.addEventListener('click', () => insertionSort(calculateDelay())); 

    const mergeSortBtn = document.getElementById('mergeSortBtn');
    mergeSortBtn.addEventListener('click', async () => {
        let bars = document.querySelectorAll('.bar');
        await mergeSort(bars, 0, bars.length - 1, calculateDelay());
    });

    const quickSortBtn = document.getElementById('quickSortBtn');
    quickSortBtn.addEventListener('click', async () => {
        let bars = document.querySelectorAll('.bar');
        await quickSort(0, bars.length - 1,  calculateDelay());
    });

    const selectionSortBtn = document.getElementById('selectionSortBtn');
    selectionSortBtn.addEventListener('click', () => selectionSort(calculateDelay()));

    // Add similar event listeners for other sorting buttons, e.g., selectionSortBtn, insertionSortBtn, etc.

    function calculateDelay() {
        // Inverse the speed value since a higher slider value should mean a faster animation
        return 100 - sortSpeedSlider.value;
    }
});