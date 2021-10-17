let count = 0;

let value = document.querySelector('.value');

let inc = document.querySelector('.btnIncrease')
let reset = document.querySelector('.btnReset')
let dec = document.querySelector('.btnDecrease')



inc.addEventListener('click', function(){
    count++
    value.innerHTML = count
    colorr()
})
reset.addEventListener('click', ()=>{
    count = 0
    value.innerHTML = count
    colorr()
})
dec.addEventListener('click', ()=>{
    count--
    value.innerHTML = count
    colorr()
})

function colorr() {
    if (count > 0) {
        value.style.color = "green"
    }
    if (count < 0) {
        value.style.color = "red"
    }
    if (count  == 0) {
        value.style.color = "#000"
    }
}
