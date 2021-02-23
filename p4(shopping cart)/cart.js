var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for(var i = 0; i<removeCartItemButtons.length;i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    })
}


function updateCartTotal(){
    var cartItemContainer = getElementsByClassName('table')[0]
    var cartRows = cartItemsContainer.getElementsByClassName('cart-row')
    for(var i = 0; i<removeCartItemButtons.length;i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('body > div.p-2.row > section > div > div > div > table > tbody > tr > td:nth-child(1)')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        console.log(priceElement, quantityElement)
    }
}
