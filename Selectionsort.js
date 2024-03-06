async function selectionSort(delay = 100) { // Adjust delay as needed
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length; i++) {
        let minIndex = i;
        bars[i].style.background = "red"; // Color current minimum
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.background = "red"; // Color current comparing bar

            await new Promise(resolve => setTimeout(resolve, delay));

            const value1 = parseInt(bars[j].style.height);
            const value2 = parseInt(bars[minIndex].style.height);

            if (value1 < value2) {
                if (minIndex !== i) {
                    bars[minIndex].style.background = "#64ffda"; // Revert color of old minimum
                }
                minIndex = j;
            } else {
                bars[j].style.background = "#64ffda"; // Revert color if not minimum
            }
        }
        if (minIndex !== i) {
            swap(bars[i], bars[minIndex]);
            await new Promise(resolve => setTimeout(resolve, delay));
            bars[minIndex].style.background = "#64ffda"; // Revert color of swapped bar
        }
        bars[i].style.background = "green"; // Mark as sorted
    }
}



