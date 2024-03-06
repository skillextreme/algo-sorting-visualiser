async function mergeSort(arr, l, r, delay = 100) {
    if (l >= r) {
        return; // Returns recursively
    }
    const m = l + parseInt((r - l) / 2);
    await mergeSort(arr, l, m, delay);
    await mergeSort(arr, m + 1, r, delay);
    await merge(arr, l, m, r, delay);
}

async function merge(arr, l, m, r, delay) {
    const n1 = m - l + 1;
    const n2 = r - m;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        arr[l + i].style.background = 'orange'; // Color for left partition
        left[i] = arr[l + i].style.height;
    }
    for (let i = 0; i < n2; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        arr[m + 1 + i].style.background = 'yellow'; // Color for right partition
        right[i] = arr[m + 1 + i].style.height;
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        await new Promise(resolve => setTimeout(resolve, delay));

        if (parseInt(left[i]) <= parseInt(right[j])) {
            if ((n1 + n2) === arr.length) {
                arr[k].style.background = 'green'; // Color for final merge
            } else {
                arr[k].style.background = 'lightgreen'; // Color for intermediate merge
            }
            arr[k].style.height = left[i];
            i++;
        } else {
            if ((n1 + n2) === arr.length) {
                arr[k].style.background = 'green'; // Color for final merge
            } else {
                arr[k].style.background = 'lightgreen'; // Color for intermediate merge
            }
            arr[k].style.height = right[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        await new Promise(resolve => setTimeout(resolve, delay));
        if ((n1 + n2) === arr.length) {
            arr[k].style.background = 'green';
        } else {
            arr[k].style.background = 'lightgreen';
        }
        arr[k].style.height = left[i];
        i++;
        k++;
    }
    while (j < n2) {
        await new Promise(resolve => setTimeout(resolve, delay));
        if ((n1 + n2) === arr.length) {
            arr[k].style.background = 'green';
        } else {
            arr[k].style.background = 'lightgreen';
        }
        arr[k].style.height = right[j];
        j++;
        k++;
    }
}


