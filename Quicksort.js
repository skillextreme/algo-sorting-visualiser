async function quickSort(l, h, delay = 100) {
    if (l < h) {
        let pivotIndex = await partition(l, h, delay);
        await Promise.all([
            quickSort(l, pivotIndex - 1, delay),
            quickSort(pivotIndex + 1, h, delay)
        ]);
    }
}

async function partition(l, h, delay) {
    const bars = document.querySelectorAll('.bar');
    let pivot = parseInt(bars[h].style.height);
    let i = l - 1;
    bars[h].style.background = "red"; // Color pivot

    for (let j = l; j <= h - 1; j++) {
        bars[j].style.background = "yellow"; // Color current item
        await new Promise(resolve => setTimeout(resolve, delay));

        if (parseInt(bars[j].style.height) < pivot) {
            i++;
            swap(bars[i], bars[j]);
            bars[i].style.background = "orange"; // Color swapped item
            if (i !== j) bars[j].style.background = "orange"; // Color swapped item
            await new Promise(resolve => setTimeout(resolve, delay));
        } else {
            bars[j].style.background = "#64ffda"; // Revert color if not less than pivot
        }
    }
    swap(bars[i + 1], bars[h]);
    bars[h].style.background = "#64ffda"; // Revert pivot color
    bars[i + 1].style.background = "green"; // Color final pivot position

    for (let k = 0; k < bars.length; k++) {
        if (k !== i + 1) bars[k].style.background = "#64ffda"; // Revert other bars color
    }

    return i + 1;
}
