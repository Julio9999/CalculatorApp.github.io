const d = document;

export default function numberExtractor(inputValue){
    let inputValue1 = '123435+123456+98777';
    console.log(inputValue1, inputValue);
    let regex = /^[0-9][0-9]*/gi
    const numbers = inputValue.match(regex);
    console.log(numbers);
    /*
    numbers.forEach(number =>{
        console.log(number[0]);
    })
    */
}