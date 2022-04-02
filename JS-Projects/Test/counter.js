

function counter(min,max){
    var t
    var res = min
    t = setInterval(()=>{
        if(res == max){
            clearInterval(t)
        }
        console.log(res)
        res = res + 1
    },100)

}

counter(2,5)