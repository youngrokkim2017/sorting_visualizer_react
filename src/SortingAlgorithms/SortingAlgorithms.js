export const mergeSort = (array) => {
    if (array.length === 1) return array;

    const midIdx = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, midIdx));
    const rightHalf = mergeSort(array.slice(midIdx));

    const sortedArray = [];

    let i = 0, j= 0;
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j]) {
            sortedArray.push(leftHalf[i++]);
        } else {
            sortedArray.push(rightHalf[j++]);
        }
    }

    while (i < leftHalf.length) sortedArray.push(leftHalf[i++]);
    while (j < rightHalf.length) sortedArray.push(rightHalf[j++]);

    return sortedArray;
}