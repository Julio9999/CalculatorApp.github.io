const d = document;

export default function mathematicalOperations(input){
    let regex = /[0-9]+|\x|\/|\+|\-/g;
    let regex2 = /\x$|\/$|\-$|\+$/;
    let regex3 = /[0-9]+\x[0-9]+|[0-9]+\/[0-9]+|[0-9]+\+[0-9]+|[0-9]+\-[0-9]+/g;
    let result = '';
    let operaciones = "5x5/5-3+2x5+2x15"
    if(operaciones.match(regex2)){
        console.log('Syntax error');
    }else{
        const operations1 = (operaciones.match(regex));

        console.log(operations1)
        
        
        let array = reducer(operations1)
        console.log(array)
        
        
        let array2 = reducer(array)
        console.log(array2)

        
        let array3 = reducer(array2)
        console.log(array3)
        
    }

    function reducer(array){
        let newarray = []

        for(let i=0;i<array.length;i++){
            if(array[i] == 'x'){
                newarray.push(multiplicar(array[i-1], array[i+1]))
                newarray = newarray.concat(array.slice(i+1,array.length).slice(i, array.length), array.slice(0,i-1).slice(0,1))
                return newarray
            }
            else if(array[i] == '/'){
                newarray.push(dividir(array[i-1], array[i+1]))
                newarray = newarray.concat(array.slice(i+1,array.length).slice(i, array.length))
                return newarray
            }
        }

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


/*
else if(array[i] == '+' || array[i] == '-'){
                newarray.push(array[i-1])
                newarray.push(array[i])
                newarray.push(array[i+1])
            }
*/