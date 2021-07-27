let elem = 
    {
        class:"item0",
        brand: "Versace",
        desc: "Bright Crystal Absolute Set",
        price: 18,
        image:"https://www.sephora.com/productimages/sku/s2323202-main-zoom.jpg?imwidth=97"
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