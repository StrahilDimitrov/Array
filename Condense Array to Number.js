function solve(input) {
    let number = Number(input.length);
    let newArray = null;

    while (number > 1) {
        newArray = [];

        for (let i = 0; i < number - 1; i++) {
            newArray[i] = input[i] + input[i + 1];
        }
        input = newArray;
        number--;
    }
    console.log(input.toString());
}
solve([2, 10, 3])