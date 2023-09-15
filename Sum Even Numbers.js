function sumEvenNumber(input) {

    let result = 0;

    for (let index = 0; index < input.length; index++) {
        let currentEl = Number(input[index]);

        if (currentEl % 2 === 0) {
            result += currentEl;
        }
    }

    console.log(result);
}
sumEvenNumber(['2', '4', '6', '8', '10'])