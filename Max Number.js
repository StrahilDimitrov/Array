// First way
function maxNumber(input) {

    let maxNum = true;
    let result = [];

    for (let firstIndex = 0; firstIndex < input.length; firstIndex++) {
        for(let secondIndex = firstIndex + 1; secondIndex < input.length; secondIndex++){

            if(input[secondIndex] >= input[firstIndex]){
                maxNum = false;
                break;
            }

        }

        if(maxNum){
            result.push(input[firstIndex]);
        }

        maxNum = true;
    }

    console.log(result.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([27, 19, 42, 2, 13, 45, 48])

console.log('-------------');

// Second way
function solve(input) {

    let result = [];

    while(input.length !== 0){
        let[current, biggest] = [input.shift(), Math.max(...input)];

        if(current > biggest){
            result.push(current);
        }
    }

    console.log(result.join(" "));
}
solve([14, 24, 3, 19, 15, 17])
solve([27, 19, 42, 2, 13, 45, 48])