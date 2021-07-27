// hover on New
let categoryNew = document.getElementsByClassName("categoryNew");
for (let i = 0; i < categoryNew.length; i++) {
  categoryNew[i].addEventListener("mouseover", function () {
    let elem1 = document.getElementById("modalContNew");
    elem1.style.visibility = "visible";
    // let elem2 = document.getElementById("modalNew")
    // elem2.style.visibility = "visible"
  });
  categoryNew[i].addEventListener("mouseout", function () {
    let elem1 = document.getElementById("modalContNew");
    elem1.style.visibility = "hidden";
    // let elem2 = document.getElementById("modalNew")
    // elem2.style.visibility = "hidden"
  });
}

let modalContNew = document.getElementById("modalContNew");
modalContNew.addEventListener("mouseover", function () {
  let elem1 = document.getElementById("modalContNew");
  elem1.style.visibility = "visible";
  // let elem2 = document.getElementById("modalNew")
  // elem2.style.visibility = "visible"
});
modalContNew.addEventListener("mouseout", function () {
  let elem1 = document.getElementById("modalContNew");
  elem1.style.visibility = "hidden";
  // let elem2 = document.getElementById("modalNew")
  // elem2.style.visibility = "hidden"
});
/////////////////////////////////////////////////////////
// hover on Brand
let categoryBrand = document.getElementsByClassName("categoryBrands");
for (let i = 0; i < categoryBrand.length; i++) {
  categoryBrand[i].addEventListener("mouseover", function () {
    let elem1 = document.getElementById("modalContBrand");
    elem1.style.visibility = "visible";
    // let elem2 = document.getElementById("modalNew")
    // elem2.style.visibility = "visible"
  });
  categoryBrand[i].addEventListener("mouseout", function () {
    let elem1 = document.getElementById("modalContBrand");
    elem1.style.visibility = "hidden";
    // let elem2 = document.getElementById("modalNew")
    // elem2.style.visibility = "hidden"
  });
}

let modalContBrand = document.getElementById("modalContBrand");
modalContBrand.addEventListener("mouseover", function () {
  let elem1 = document.getElementById("modalContBrand");
  elem1.style.visibility = "visible";
  // let elem2 = document.getElementById("modalNew")
  // elem2.style.visibility = "visible"
});
modalContBrand.addEventListener("mouseout", function () {
  let elem1 = document.getElementById("modalContBrand");
  elem1.style.visibility = "hidden";
  // let elem2 = document.getElementById("modalNew")
  // elem2.style.visibility = "hidden"
});
///////////////////////////////////////////////////////////////////////////
// hover on MiniSize
let categoryMiniSize = document.getElementsByClassName("categoryMiniSize");
for (let i = 0; i < categoryMiniSize.length; i++) {
  categoryMiniSize[i].addEventListener("mouseover", function () {
    let elem1 = document.getElementById("modalContMiniSize");
    elem1.style.visibility = "visible";
    // let elem2 = document.getElementById("modalNew")
    // elem2.style.visibility = "visible"
  });
  categoryMiniSize[i].addEventListener("mouseout", function () {
    let elem1 = document.getElementById("modalContMiniSize");
    elem1.style.visibility = "hidden";
    // let elem2 = document.getElementById("modalNew")
    // elem2.style.visibility = "hidden"
  });
}

let modalContMiniSize = document.getElementById("modalContMiniSize");
modalContMiniSize.addEventListener("mouseover", function () {
  let elem1 = document.getElementById("modalContMiniSize");
  elem1.style.visibility = "visible";
  // let elem2 = document.getElementById("modalNew")
  // elem2.style.visibility = "visible"
});
modalContMiniSize.addEventListener("mouseout", function () {
  let elem1 = document.getElementById("modalContMiniSize");
  elem1.style.visibility = "hidden";
  // let elem2 = document.getElementById("modalNew")
  // elem2.style.visibility = "hidden"
});
///////////////////////////////////////////////////////////////////////////
