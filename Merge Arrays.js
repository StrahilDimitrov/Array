function mergeArray(firstArray, secondArray) {

    let result = [];

    for(let index = 0; index < firstArray.length; index++){
        
        if(index % 2 === 0){
            result.push(Number(firstArray[index]) + Number(secondArray[index]));
        }
        else{
            result.push(firstArray[index] + secondArray[index]);
        }
    }
    console.log(result.join(' - '));
}
mergeArray(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)