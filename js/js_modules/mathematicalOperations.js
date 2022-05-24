const d = document;

export default function mathematicalOperations(input){
    let regex = /[0-9]+|\x|\/|\+|\-/g;
    let regex2 = /-(?=-+)/g;
    let regex3 = /-{2,}/g;



    let operations = input.match(regex).toString().replace(/,/g, "");
    console.log(operations);
    
    //console.log(operations.search(regex3));


    let s = (input.match(regex3));
    console.log(s)
    for(let i=0;i<s.length;i++){
        if(s[i].length %2 == 0){
            s[i] = '+'
        }else{
            s[i] = '-'
        }
    }


    for(let i=0;i<s.length;i++){
        operations = operations.toString().replace(/,/g, "");
        operations = operations.replace(regex3, s[i]);
    }
    console.log(operations.split(''));
    /*
    if(regex2.test(input)){
        let str = input.match(regex2).toString().replace(/,/g,"") + '-';
        console.log(str);
        if((str.length) % 2 == 0){
            operations = (input.replace(str, '+'));
        }else{
            operations = (input.replace(str, '-'));
        }
        operations = (operations.split(''));
    }
    
    const operations1 = (operations);
    
    console.log(operations1);

    let resultado = reducer(operations1)
    console.log(resultado)
    return resultado;
    */

    function reducer(array){
        let newarray = [],
        leftArray = [],
        rigthArray = []

        for(let i=0;i<array.length;i++){
            if(!array.includes('/') && !array.includes('x')){
                return sumarRestar(array)
            }else{
                if(array[i] == 'x'){
                    if((i-2) < 0){
                        leftArray.push(multiplicar(array[i+1], array[i-1]))
                    }else{
                        leftArray = (array.slice(0,(i-1)))
                        leftArray.push(multiplicar(array[i+1], array[i-1]))
                    }
                    if(-(array.length-i-2) < 0){
                        rigthArray = (array.slice(-(array.length-i-2)))
                    }
    
                    newarray = newarray.concat(leftArray, rigthArray)
                    return newarray.includes('/') || newarray.includes('x') ? reducer(newarray) : sumarRestar(newarray);
                }
                else if(array[i] == '/'){
                    if((i-2) < 0){
                        leftArray.push(dividir(array[i-1], array[i+1]))
                    }else{
                        leftArray = (array.slice(0,(i-2))).push(dividir(array[i-1], array[i+1]))
                    }
                    if(-(array.length-i-2) < 0){
                        rigthArray = (array.slice(-(array.length-i-2)))
                    }
    
                    newarray = newarray.concat(leftArray, rigthArray)
                    return newarray.includes('/') || newarray.includes('x') ? reducer(newarray) : sumarRestar(newarray);
                }
            }
            }

    }
    
    function sumarRestar(array){
        let resultado = 0
        if(array.length == 1){
            resultado = array[0]
        }else{
            for(let i=0;i<array.length;i++){
                if(array[i] == '+'){
                    if(resultado == 0){
                        resultado = (sumar(Number(array[i-1]), Number(array[i+1])))
                    }else{
                        resultado = (sumar(Number(resultado), Number(array[i+1])))
                    }
                }else if(array[i] == '-'){
                    if(resultado == 0){
                        resultado = (restar(Number(array[i-1]), Number(array[i+1])))
                    }else{
                        resultado = restar(Number(resultado), Number(array[i+1]))
                    }
                }
            }
        }
        return resultado;
    }

    function multiplicar(num1,num2){
        return num1*num2
    }

    function dividir(num1,num2){
        return num1/num2
    }

    function sumar(num1, num2){
        return num1 + num2
    }

    function restar(num1, num2){
        return num1 - num2
    }

}

