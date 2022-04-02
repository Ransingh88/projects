let str = 'Hello World! How are you';


function duplicate(str){
    let res = {}

    for(let i=0;i<str.length;i++){
        console.log(str.charCodeAt(i))
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i)<= 91 || str.charCodeAt(i) >= 97 && str.charCodeAt(i)<= 123){
            if(res[str[i].toLowerCase()]){
            res[str[i].toLowerCase()] +=1
        }else{
            res[str[i].toLowerCase()] = 1
        }
        }
        
    }

    for(keys in res){
        if(res[keys] > 1){
            console.log(keys, res[keys])
        }
    }
}

duplicate(str)