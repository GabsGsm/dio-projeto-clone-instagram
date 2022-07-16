var previa = new Array(4);
previa[0] = document.body.querySelector("#previaApp1")
previa[1] = document.body.querySelector("#previaApp2")
previa[2] = document.body.querySelector("#previaApp3")
previa[3] = document.body.querySelector("#previaApp4")
var index= 0
var lastIndex= 3
var indexMeio = 2



const loop = setInterval(function(){
        if(!previa[index].classList.contains("frame-previa")){
            previa[index].classList.add("frame-previa")  
        }
        if(previa[lastIndex].classList.contains("frame-previa")){
            previa[lastIndex].classList.add("frame-previa-fim")
        }
        if(previa[indexMeio].classList.contains("frame-previa-fim")){
            previa[indexMeio].classList.remove("frame-previa")
            previa[indexMeio].classList.remove("frame-previa-fim")
        }
        
        console.log("index: "+index)
        console.log("last index: "+lastIndex)
        index++
        lastIndex++
        indexMeio++
        if(index == 4) {
            index = 0;
        }
        if(lastIndex == 4){
            lastIndex = 0
        }
        if(indexMeio == 4){
            indexMeio = 0
        }
}, 4000)


/*
let animaca4 = setInterval(() => {
    if(!previa[3].classList.contains("frame-previa")){
        previa[3].classList.add("frame-previa")
    }else{
       
    }
}, 0);
let animaca4fim = setInterval(() => {
    if(!previa[3].classList.contains("frame-previa-fim")){
        previa[3].classList.add("frame-previa-fim")
    }else{
       
    }
}, 2500);

let animaca3 = setTimeout(() => {
    previa[2].classList.add("frame-previa")
}, 2600);
let animaca3fim = setTimeout(() => {
    previa[2].classList.add("frame-previa-fim")
}, 4500);
*/

/*
var previa = document.body.querySelector("#previaApp")
var milissegundos = 8000
var index = 1
var interval = setInterval(function() {
    previa.setAttribute("src", "../imagem/screenshot"+index+".png")
    index++
    if(index > 4){
        index = 1 
    }
}, milissegundos);
 */