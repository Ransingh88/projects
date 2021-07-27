// for product carousel
let l1 = 0;
function nextBtn1(list) {
  l1++;
  let itemList = document.getElementsByClassName(list);
  for (var i of itemList) {
    if (l1 === 0) {
      i.style.left = "0px";
    }
    if (l1 === 1) {
      i.style.left = "-600px";
    }
    if (l1 === 2) {
      i.style.left = "-1200px";
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
      i.style.left = "-600px";
    }
    if (l1 === 2) {
      i.style.left = "-1200px";
    }
    if (l1 < 0) {
      l1 = 0;
    }
  }
}

//for adding products on cart in basket page
let products = {
  item1: {
    class: "item1",
    brand: "KVD Beauty",
    desc: "Everlasting Blush Refills",
    price: 25,
    image:
      "https://www.sephora.com/productimages/sku/s2413334-main-zoom.jpg?imwidth=135&imwidth=97",
  },
  item2: {
    class: "item2",
    brand: "NARS",
    desc: "Puff Painted Liquid Blush",
    price: 15,
    image:
      "https://www.sephora.com/productimages/sku/s2426930-main-zoom.jpg?imwidth=135&imwidth=97",
  },
  item3: {
    class: "item3",
    brand: "Youth to the People",
    desc: "Antioxidant Cleanser",
    price: 35,
    image:
      "https://www.sephora.com/productimages/sku/s1237379-main-zoom.jpg?imwidth=135&imwidth=97",
  },
  item4: {
    class: "item4",
    brand: "Dior",
    desc: "Dior Addict Lip Glow",
    price: 30,
    image:
      "https://www.sephora.com/productimages/sku/s2305480-main-zoom.jpg?imwidth=135&imwidth=97",
  },
};

localStorage.setItem("productList", JSON.stringify(products));

let totalprice = 0; // takes care of changing total prices of items in cart
let itemcount = 0; // takes care of changing total counts of items in cart
let itemcountContainer = document.getElementById("itemNo"); // where we have to update total count of items in cart
let totalpriceCont = document.getElementById("merchandiseTotal"); // where we have to update total price of items in cart
let remainingForFreeShippingCont = document.getElementById(
  "remainingForFreeShipping"
); // where we have to update total remaining for free shipping
let remainingForFreeShipping; //takes care of total remaining for free shipping
function addToCart(item) {
  let products = JSON.parse(localStorage.getItem("productList"));
  let elem = products[item];
  let cartItems = localStorage.getItem("cartList");
  if (cartItems == null) {
    cartItems = {};
  } else {
    cartItems = JSON.parse(cartItems);
  }
  elem.quantity = 1;
  if (cartItems[item]) {
    cartItems[item].quantity++;
  } else {
    cartItems[item] = elem;
  }
  localStorage.setItem("cartList", JSON.stringify(cartItems));
  document.location.reload();
}

let cart = document.getElementById("cart");
let cartitems = JSON.parse(localStorage.getItem("cartList"));
let estimated = document.getElementById("estimatedTotal"); // where we have to update total price of cart in right side of page
if (cartitems != null) {
  cart.innerHTML = null;
  for (key in cartitems) {
    let parentdiv = document.createElement("div");
    let image = document.createElement("img");
    let brand = document.createElement("h4");
    let desc = document.createElement("p");
    let quantity = document.createElement("p");
    let price = document.createElement("h4");
    let randomInfo = document.createElement("p");
    image.src = cartitems[key].image;
    brand.innerHTML = cartitems[key].brand;
    desc.innerHTML = cartitems[key].desc;
    price.innerHTML = `$${cartitems[key].price}`;
    randomInfo.innerHTML = `
        <p>SIZE 0.28 oz/ 8 g • ITEM 2465821</p>
        <p>Color: 03 Tan Light</p>
        `;
    randomInfo.style.fontSize = "14px";
    randomInfo.style.color = "gray";

    quantity.innerHTML = cartitems[key].quantity;
    let imagediv = document.createElement("div");
    let infodiv = document.createElement("div");
    var quantitySelect = document.createElement("select"); //added select functionality in cart

    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    let option4 = document.createElement("option");
    let option5 = document.createElement("option");
    let option6 = document.createElement("option");
    let option7 = document.createElement("option");
    let option8 = document.createElement("option");
    let option9 = document.createElement("option");
    let option10 = document.createElement("option");
    option1.innerHTML = "1";
    option2.innerHTML = "2";
    option3.innerHTML = "3";
    option4.innerHTML = "4";
    option5.innerHTML = "5";
    option6.innerHTML = "6";
    option7.innerHTML = "7";
    option8.innerHTML = "8";
    option9.innerHTML = "9";
    option10.innerHTML = "10";
    option1.value = "1";
    option2.value = "2";
    option3.value = "3";
    option4.value = "4";
    option5.value = "5";
    option6.value = "6";
    option7.value = "7";
    option8.value = "8";
    option9.value = "9";
    option10.value = "10";
    quantitySelect.append(
      option1,
      option2,
      option3,
      option4,
      option5,
      option6,
      option7,
      option8,
      option9,
      option10
    );
    quantitySelect.value = String(cartitems[key].quantity); // increases quantity in cart if add items is clicked multiple times
    quantitySelect.setAttribute("id", `${key}`);
    quantitySelect.addEventListener("change", function () {
      cartitems[this.id].quantity = Number(this.value);

      localStorage.setItem("cartList", JSON.stringify(cartitems));
      document.location.reload();
    });
    itemcount += Number(quantitySelect.value); //updates total count
    totalprice += cartitems[key].price * Number(quantitySelect.value); //updates total price

    let pricediv = document.createElement("div");
    let removebutton = document.createElement("button");
    removebutton.innerHTML = `<button onclick="removeFromCart('${key}')">REMOVE</button>`;
    imagediv.append(image);
    infodiv.append(brand, desc, randomInfo);

    pricediv.append(price, removebutton);
    parentdiv.append(imagediv, infodiv, quantitySelect, pricediv);
    cart.append(parentdiv);
    totalpriceCont.innerHTML = `<h4>$${totalprice}</h4>`; //updates price in dom
    estimated.innerHTML = `<h4>$${totalprice}</h4>`; //updates price in dom
    itemcountContainer.innerHTML = `Items in basket (${itemcount})`; //updates count in dom
  }
}

if (cartitems == null || Object.keys(cartitems).length === 0) {
  cart.innerHTML = `
            <h4>Your basket is currently empty.</h4>
            <button id="emptyCartBtn" onclick="window.location.href='productPage.html'">Shop New Arrivals</button>
        `;
}
if (totalprice < 50) {
  remainingForFreeShippingCont.innerHTML = `You're only $${
    50 - totalprice
  }.00 away from Free Shipping.`;
} else {
  remainingForFreeShippingCont.innerHTML = "You now qualify for Free Shipping!";
}
function removeFromCart(item) {
  delete cartitems[item];
  localStorage.setItem("cartList", JSON.stringify(cartitems));
  document.location.reload();
}

function applyPromo() {
  let promo = document.getElementById("promocode").value;

  if (promo == "masai30") {
    totalpriceCont.innerHTML = `<h4>$${totalprice * 0.7}</h4>`; //updates price in dom
    estimated.innerHTML = `<h4>$${totalprice * 0.7}</h4>`; //updates price in dom
    alert("promocode applied!");
  } else {
    alert("invalid promocode");
  }
}
