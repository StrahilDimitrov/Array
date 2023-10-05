function commonElements(firstArray, secondArray) {

    for (let index = 0; index < firstArray.length; index++) {
        let firstCurrentEl = firstArray[index];

        for (let secondIndex = 0; secondIndex < firstArray.length; secondIndex++) {
            let secondCurrentEl = secondArray[secondIndex];

            if (firstCurrentEl === secondCurrentEl) {
                console.log(firstCurrentEl);
            }
        }
    }
}
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']

)