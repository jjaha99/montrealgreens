let carts = document.querySelectorAll('.btn-success')

let products = [
    {
        name : "Wallaroo Trail",
        tag : "wallarootrail",
        price : 47,
        inCart : 0
    },
    {
        name : "Malina Red Wine",
        tag : "malinaredwine",
        price : 12,
        inCart : 0
    },
    {
        name : "Revolution White Wine",
        tag : "revolutionwhitewine",
        price : 13,
        inCart : 0
    },
    {
        name : "Molson Beer",
        tag : "molsonbeer",
        price : 19,
        inCart : 0
    }
];


for(i = 0;i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    }) 
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart-num span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cart-num span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart-num span').textContent = 1;
    }
    

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart')
    console.log("My product is", product);
    product.inCart = 1;

    cartItem = {
        [product.tag]:product
    }
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}



onLoadCartNumbers();