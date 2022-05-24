import themeSwitcher from "./js_modules/themeSwitcher.js";
import keys from "./js_modules/keys.js";
import numberExtractor from "./js_modules/numberExtractor.js";
import mathematicalOperations from "./js_modules/mathematicalOperations.js";

const d = document,
input = d.getElementById('input');

d.addEventListener('DOMContentLoaded', (e)=>{
    themeSwitcher()
    //const result = mathematicalOperations(d.getElementById('input').value);
})


d.addEventListener('click', (e)=>{

    if(e.target.matches('.key')){
        if(e.target.matches('.equal')){
            let result = mathematicalOperations(input.value);
            //input.value = result;
        }else{
            keys(d.getElementById('input'), e.target.textContent);
        }

    }

})