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
        const operations1 = (input.match(regex));

        let array = reducer(operations1)
        console.log(array)
        
    }

    function reducer(array){
        let newarray = [],
        leftArray = [],
        rigthArray = []

        for(let i=0;i<array.length;i++){
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
                
                console.log(leftArray, 'left')
                console.log(rigthArray, 'right')


                newarray = newarray.concat(leftArray, rigthArray)
                return newarray
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