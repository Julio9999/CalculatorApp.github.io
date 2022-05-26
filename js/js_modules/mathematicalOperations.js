const d = document;

export default function mathematicalOperations(input){
    let regex1 = /\x{2,}|\/{2,}|\-+$|\++$|\x+$|\/+$/;
    let regex2 = /[0-9]+\.[0-9]+|[0-9]+|\x|\/|\++|\-+/g;
    let regex3 = /-{2,}|\+{2,}/g;

    if(regex1.test(input)){
        return "Syntax Error"
    }else{

        let operations = input.match(regex2)
        for(let i=0;i<operations.length;i++){
            if(regex3.test(operations[i])){
                if(((operations[i].length) + 1) % 2 == 0){
                    if(operations[i].includes('+')){
                        operations[i] = '+'
                    }else{
                        operations[i] = '-'
                    }
                }else{
                    if(operations[i].includes('+')){
                        operations[i] = '+'
                    }else{
                        operations[i] = '+'
                    }
                }
            }
        }
        let result = reducer(operations)
        return result;
    }

    
    
    
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

