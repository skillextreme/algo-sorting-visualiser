async function bubbleSort(delay = 100) { // Adjust delay as needed
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await new Promise(resolve => setTimeout(resolve, delay)); // Delay for visualization

            const value1 = parseInt(bars[j].style.height);
            const value2 = parseInt(bars[j + 1].style.height);

            if (value1 > value2) {
                swap(bars[j], bars[j + 1]);
                await new Promise(resolve => setTimeout(resolve, delay)); // Delay after swap
            }

            bars[j].style.background = "#64ffda"; // Revert to original color
            if (j === bars.length - i - 2) {
                bars[j + 1].style.background = "green"; // Mark as sorted
            }
        }
        bars[bars.length - i - 1].style.background = "green"; // Final element sorted
    }
}

