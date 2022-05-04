const d = document;

export default function numberExtractor(inputValue){
    let regex = /[0-9]+/g
    let regex2 = /\D+/g
    const numbersString = inputValue.match(regex);
    const numbers = numbersString.map(el => Number(el));
    const operations = inputValue.match(regex2);
    return [numbers , operations];
}