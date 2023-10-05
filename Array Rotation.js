function rotation(array, rotateNumber){

    for(let index = 0; index < rotateNumber; index++){
        let currentEl = array.shift();
        array.push(currentEl);
    }

    console.log(array.join(' '));
}
rotation([32, 21, 61, 1], 4)