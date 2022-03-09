let l1 = 0;
function nextBtn1(list) {
  l1++;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l1 === 0) {
      i.style.left = "0px";
    }
    if (l1 === 1) {
      i.style.left = "-1070px";
    }
    if (l1 === 2) {
      i.style.left = "-2140px";
    }
    if (l1 > 2) {
      l1 = 2;
    }
  }
}
function prevBtn1(list) {
  l1--;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l1 === 0) {
      i.style.left = "0px";
    }
    if (l1 === 1) {
      i.style.left = "-1070px";
    }
    if (l1 === 2) {
      i.style.left = "-2140px";
    }
    if (l1 < 0) {
      l1 = 0;
    }
  }
}

let l2 = 0;
function nextBtn2(list) {
  l2++;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l2 === 0) {
      i.style.left = "0px";
    }
    if (l2 === 1) {
      i.style.left = "-1070px";
    }
    if (l2 === 2) {
      i.style.left = "-2140px";
    }
    if (l2 > 2) {
      l2 = 2;
    }
  }
}
function prevBtn2(list) {
  l2--;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l2 === 0) {
      i.style.left = "0px";
    }
    if (l2 === 1) {
      i.style.left = "-1070px";
    }
    if (l2 === 2) {
      i.style.left = "-2140px";
    }
    if (l2 < 0) {
      l2 = 0;
    }
  }
}

let l3 = 0;
function nextBtn3(list) {
  l3++;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l3 === 0) {
      i.style.left = "0px";
    }
    if (l3 === 1) {
      i.style.left = "-1070px";
    }
    if (l3 === 2) {
      i.style.left = "-2140px";
    }
    if (l3 > 2) {
      l3 = 2;
    }
  }
}
function prevBtn3(list) {
  l3--;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l3 === 0) {
      i.style.left = "0px";
    }
    if (l3 === 1) {
      i.style.left = "-1070px";
    }
    if (l3 === 2) {
      i.style.left = "-2140px";
    }
    if (l3 < 0) {
      l3 = 0;
    }
  }
}

let l4 = 0;
function nextBtn4(list) {
  l4++;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l4 === 0) {
      i.style.left = "0px";
    }
    if (l4 === 1) {
      i.style.left = "-1070px";
    }
    if (l4 === 2) {
      i.style.left = "-2140px";
    }
    if (l4 > 2) {
      l4 = 2;
    }
  }
}
function prevBtn4(list) {
  l4--;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l4 === 0) {
      i.style.left = "0px";
    }
    if (l4 === 1) {
      i.style.left = "-1070px";
    }
    if (l4 === 2) {
      i.style.left = "-2140px";
    }
    if (l4 < 0) {
      l4 = 0;
    }
  }
}

let l5 = 0;
function nextBtn5(list) {
  l5++;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l5 === 0) {
      i.style.left = "0px";
    }
    if (l5 === 1) {
      i.style.left = "-1070px";
    }
    if (l5 === 2) {
      i.style.left = "-2140px";
    }
    if (l5 > 2) {
      l5 = 2;
    }
  }
}
function prevBtn5(list) {
  l5--;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l5 === 0) {
      i.style.left = "0px";
    }
    if (l5 === 1) {
      i.style.left = "-1070px";
    }
    if (l5 === 2) {
      i.style.left = "-2140px";
    }
    if (l5 < 0) {
      l5 = 0;
    }
  }
}

function signinToggle() {
  var popup_signin = document.getElementById("popup_signin");
  popup_signin.classList.toggle("signinBtnActive");
  //  var blur = document.getElementByClassName('body');
  // blur.setAttribute('class', 'signinBtnActive');
}

function signupToggle(e) {
  e.preventDefault();
  var popup_signup = document.getElementById("popup_signup");
  popup_signup.classList.toggle("signupBtnActive");
}

function signup() {
  let form = document.getElementById("signup_form");
  let firstName = form.fname.value;
  let lastName = form.lname.value;
  let email = form.email.value;
  let password = form.password.value;
  let phone = form.phone.value;
  let dobMonth = form.DOB_month.value;
  let dobDay = form.DOB_day.value;
  let dob = `${dobDay} ${dobMonth}`;
  let pin = form.zippin.value;

  if (firstName == "" || lastName == "" || email == "" || password == "") {
    alert("All fields should be filled");
  } else {
    let users = {
      firstName,
      lastName,
      email,
      password,
      phone,
      dob,
      pin,
    };

    let arr = localStorage.getItem("users");

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }
    arr.push(users);
    localStorage.setItem("users", JSON.stringify(arr));
  }

  form.fname.value = "";
  form.lname.value = "";
  form.email.value = "";
  form.password.value = "";
  form.phone.value = "";
  form.DOB_month.value = "";
  form.DOB_day.value = "";
  form.zippin.value = "";
}

function signin(e) {
  e.preventDefault();
  let users_data = JSON.parse(localStorage.getItem("users"));
  let form = document.getElementById("signin_form");
  let email = form.email.value;
  console.log("email: ", email);
  let password = form.password.value;
  console.log("password: ", password);

  if (email == "" || password == "") {
    alert("all field should be filled");
  } else {
    for (var i = 0; i < users_data.length; i++) {
      if (email == users_data[i].email && password == users_data[i].password) {
        alert("Sucess");
        let userDisplay_name = document.getElementById("userDisplay_name");
        userDisplay_name.textContent = users_data[i].firstName;
      }
    }
  }
}
