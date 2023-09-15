function reverseArray(getNum, array) {

    let newArr = [];

    for (let index = 0; index < getNum; index++) {
        newArr.push(array[index]);
    }

    console.log(newArr.reverse().join(' '));
}
reverseArray(4, [-1, 20, 99, 5])