function evenAndOddSubstract(input) {

    let oddSum = 0;
    let evenSum = 0;
    let differenceSum = 0;

    for (let index = 0; index < input.length; index++) {
        let currentEl = Number(input[index]);

        if (currentEl % 2 === 0) {
            evenSum += currentEl;
        }
        else {
            oddSum += currentEl;
        }
    }

    differenceSum = evenSum - oddSum;

    console.log(differenceSum);
}
evenAndOddSubstract([1, 2, 3, 4, 5, 6])