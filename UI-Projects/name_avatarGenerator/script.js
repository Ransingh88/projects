
// let emp_name = document.getElementById('emp_name').innerText
let emp_avatarName = document.getElementById('emp_avatar-name')


function getAvatarName(name,bgColor = "darkblue",fgColor="white"){
    
    
        let nameSplit = name.split(' ')
        let getAvtr = ''
        bgColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        if(nameSplit.length == 1){
            getAvtr+=nameSplit[0][0];
        }else{

        
        for(let i=0;i<2;i++){
            getAvtr+=nameSplit[i][0];
        }
    }
        emp_avatarName.innerText = getAvtr;
        document.getElementById('emp_avatar').style.backgroundColor=bgColor;
        document.getElementById('emp_avatar-name').style.color=fgColor;
        
}    

function nameChange(){
    let emp_name = document.getElementById('emp_name').innerText = document.getElementById('name').value
    getAvatarName(emp_name)
}
// getAvatarName(emp_name)