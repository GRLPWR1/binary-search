// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch (arr, el) {
    let left = -1;
    let right = arr.length;
    while (right - left > 1) {
        let mid = Math.floor((left + right)/2);
        if (el === arr[mid]) return mid;
        if (el < arr[mid]) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return -1;
}

module.exports = binarySearch