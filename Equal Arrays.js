function equalArray(firstArray, secondArray) {

    let sum = 0;

    for (let index = 0; index < firstArray.length; index++) {
        if (firstArray[index] !== secondArray[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        }
        else {
            sum += Number(firstArray[index]);
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArray(
    ['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5']
)