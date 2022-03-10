let data = [];


function user_register() {
  let firstName = document.getElementById("r_firstname").value;
  let lastName = document.getElementById("r_lastname").value;
  let desc = document.getElementById("r_desc").value;
  let username = document.getElementById("r_username").value;
  let password = document.getElementById("r_password").value;
  let role = document.getElementById("r_role").value;
  let user = {
    firstName,
    lastName,
    username,
    password,
    desc,
    role,
  };

  if (localStorage.getItem("db") == null) {
    data.push(user);
    localStorage.setItem("db", JSON.stringify(data));
    // location.reload();
    console.log("DataBase Created and user data submmitted successfully");
  } else {
    data = JSON.parse(localStorage.getItem("db"));
    data.push(user);
    localStorage.setItem("db", JSON.stringify(data));
    // location.reload();
    console.log("New Use registred Successfully");
  }

document.getElementById("r_firstname").value = "";
document.getElementById("r_lastname").value = "";
document.getElementById("r_desc").value = "";
document.getElementById("r_username").value = "";
document.getElementById("r_password").value = "";
document.getElementById("r_role").value = "";
}

function user_login(){
    if(sessionStorage.getItem("userdata") !== null){
        alert('You are already loggedin, Logout first to login again')
    }else{
 
  let username = document.getElementById("l_username").value;
  let password = document.getElementById("l_password").value;
  let database = JSON.parse(localStorage.getItem("db"));
  if(database == null){
    alert("User Not Found");
}
  else if(username == '' || password == ''){
      alert("All fields are mandatory")
  }
  else{
   
  database.forEach(element => {
      if(element.username == username && element.password == password && element.role == 'emp'){
        sessionStorage.setItem("userdata", JSON.stringify(element));
        document.getElementById("login_status").style.color = 'green';
        document.getElementById("login_status").innerText = 'Login Successfull'
        
        let id = '<p class="user_welcome">Welcome <span class="userName" id="display_userName">Unknow</span></p><img src="https://img.icons8.com/bubbles/40/000000/user.png"/><p id="logout" class="user_logout" onclick="user_logout()"><svg id="power" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon line" width="30" height="30"><line id="primary" x1="12" y1="3" x2="12" y2="12" style="fill: none; stroke: rgb(255, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><path id="primary-2" data-name="primary" d="M17.66,7.34a8,8,0,1,1-11.32,0" style="fill: none; stroke: rgb(255, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg></p>'
sessionStorage.setItem("userdataID", JSON.stringify(id));
location.replace("index.html");
      }
      else if(element.username == username && element.password == password && element.role == 'admin'){
        sessionStorage.setItem("userdata", JSON.stringify(element));
        document.getElementById("login_status").style.color = 'green';
        document.getElementById("login_status").innerText = 'Login Successfull'
        
        let z = JSON.parse(localStorage.getItem("db"));
        sessionStorage.setItem("userdatas", JSON.stringify(z));
        

        let id = '<p class="user_welcome">Welcome <span class="userName" id="display_userName">Unknow</span>(Admin)</p><img src="https://img.icons8.com/bubbles/40/000000/user.png"/><p id="logout" class="user_logout" onclick="user_logout()"><svg id="power" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon line" width="30" height="30"><line id="primary" x1="12" y1="3" x2="12" y2="12" style="fill: none; stroke: rgb(255, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><path id="primary-2" data-name="primary" d="M17.66,7.34a8,8,0,1,1-11.32,0" style="fill: none; stroke: rgb(255, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg></p>'
sessionStorage.setItem("userdataID", JSON.stringify(id));


       
        
        location.replace("admin.html");
      }
  });

   if(sessionStorage.getItem("userdata") == null){
    document.getElementById("login_status").style.color = 'red';
    document.getElementById("login_status").innerText = 'Invalid Credentials, Try again'
  }
  
// let id = '<p class="user_welcome">Welcome <span class="userName" id="display_userName">Unknow</span></p><img src="https://img.icons8.com/bubbles/40/000000/user.png"/><p id="logout" class="user_logout" onclick="user_logout()"><svg id="power" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon line" width="30" height="30"><line id="primary" x1="12" y1="3" x2="12" y2="12" style="fill: none; stroke: rgb(255, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><path id="primary-2" data-name="primary" d="M17.66,7.34a8,8,0,1,1-11.32,0" style="fill: none; stroke: rgb(255, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg></p>'
// sessionStorage.setItem("userdataID", JSON.stringify(id));
// location.replace("index.html");

}

document.getElementById("l_username").value = '';
document.getElementById("l_password").value = '';

}

};


function getSessionData(){
  if(sessionStorage.getItem("userdataID") == null){
    sessionStorage.setItem("userdataID", JSON.stringify('<button><a href="login.html">Login</a></button><button><a href="register.html">Register</a></button>'));
  }
  document.getElementById("user_profile").innerHTML = JSON.parse(sessionStorage.getItem("userdataID"))
 try {
  let userdata = JSON.parse(sessionStorage.getItem("userdata"))
  document.getElementById("display_userName").innerText = userdata.firstName;
  document.getElementById("user_desc").innerText = userdata.desc;
  document.getElementById("user_name").innerText = 'Hello ' + userdata.firstName +' '+ userdata.lastName + ' good to see you 😊';


 } catch (error) {
   console.warn('Error : ',error.message)
 }
}
getSessionData();



function user_logout(){
  alert('Are you sure, you want to logout?')
    sessionStorage.clear();
    // document.getElementById('user_profile').innerHTML = '<button><a href="login.html">Login</a></button><button><a href="register.html">Register</a></button>'
    location.replace('index.html');
}

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  if (keyName === 'Enter') {
    user_login();
  }
}, false);


function viewUsers(){
  document.getElementById("ll").innerHTML = ''
  let zz = JSON.parse(sessionStorage.getItem("userdatas"));
zz.forEach(ele => {
  // Create element:
const para = document.createElement("p");
para.innerHTML = ele.firstName + ' ' + ele.lastName;

// Append to another element:
document.getElementById("ll").appendChild(para);
});
}