async function insertionSort(delay = 100) { // Adjust delay as needed
    const bars = document.querySelectorAll('.bar');
    for (let i = 1; i < bars.length; i++) {
        let j = i - 1;
        const keyHeight = bars[i].style.height;
        bars[i].style.background = "red"; // Color current key

        await new Promise(resolve => setTimeout(resolve, delay));

        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(keyHeight)) {
            bars[j].style.background = "red"; // Color compared bar
            bars[j + 1].style.height = bars[j].style.height; // Move bar visually
            j = j - 1;

            await new Promise(resolve => setTimeout(resolve, delay));
            for (let k = i; k >= 0; k--) {
                bars[k].style.background = "#64ffda"; // Revert color
            }
        }
        bars[j + 1].style.height = keyHeight; // Insert key at its correct position
        bars[i].style.background = "green"; // Mark as sorted
    }

    // Mark all elements as sorted
    bars.forEach(bar => {
        bar.style.background = "green";
    });
}
