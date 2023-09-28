function addAndSubstract(input) {

    let newArray = [];
    let oldArraySum = 0;
    let newArraySum = 0;

    for (let index = 0; index < input.length; index++) {
        let currentNum = Number(input[index]);

        oldArraySum += currentNum;

        if (currentNum % 2 === 0) {
            currentNum += index;
        }
        else {
            currentNum -= index;
        }

        newArray.push(currentNum);
    }

    for(let index = 0; index < newArray.length; index++){
        let newCurrentNum = newArray[index];
        newArraySum += newCurrentNum;
    }

    console.log(newArray)
    console.log(oldArraySum);
    console.log(newArraySum);
}
addAndSubstract([5, 15, 23, 56, 35])