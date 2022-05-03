import themeSwitcher from "./js_modules/themeSwitcher.js";
import keys from "./js_modules/keys.js";
import numberExtractor from "./js_modules/numberExtractor.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e)=>{
    themeSwitcher()
})


d.addEventListener('click', (e)=>{

    if(e.target.matches('.key')){
        if(e.target.matches('.equal')){
            numberExtractor(d.getElementById('input').value);
        }else{
            keys(d.getElementById('input'), e.target.textContent);
        }

    }

})