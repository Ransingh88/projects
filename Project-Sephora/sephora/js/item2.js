let elem = 
    {
        class:"item01",
        brand: "Briogeo",
        desc: "Cherry Balancing Shampoo",
        price: 49,
        image:"https://www.sephora.com/productimages/sku/s2452266-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=97"
    }


function addToCart(item) {
    
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