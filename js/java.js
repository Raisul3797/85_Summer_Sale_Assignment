// get product price
function productPrice (productPriceID){
    const productPrice = document.getElementById(productPriceID);
    const priceStr = productPrice.innerText;
    const price = parseFloat(priceStr);
    return price;
}

// add product in the cart
function addProductToCart (productNumber, price){
  console.log(productNumber+ ' ' +price)
  const countEntry = document.getElementById('purchase_list');
  
  const countElement = countEntry.childElementCount;
  const p = document.createElement('p');
    p.classList.add('my-3') ;
    p.innerHTML = `${countElement + 1} ${productNumber} ${price} tk.`;

  countEntry.appendChild(p);
}

document.getElementById('product1_btn').addEventListener('click', function(){    
    const prod1Price  = productPrice('product1_price');

    addProductToCart('Product-1', prod1Price);
    // console.log(prod1Price);
})

document.getElementById('product2_btn').addEventListener('click', function(){    
    const prod2Price  = productPrice('product2_price');
    // console.log(prod2Price);
    addProductToCart('Product-2', prod2Price);
})

document.getElementById('product3_btn').addEventListener('click', function(){    
    const prod3Price  = productPrice('product3_price');
    addProductToCart('Product-3', prod3Price);
})

document.getElementById('product4_btn').addEventListener('click', function(){    
    const prod4Price  = productPrice('product4_price');
    addProductToCart('Product-4', prod4Price);
})

document.getElementById('product5_btn').addEventListener('click', function(){    
    const prod5Price  = productPrice('product5_price');
    addProductToCart('Product-5', prod5Price);
})
document.getElementById('product6_btn').addEventListener('click', function(){    
    const prod6Price  = productPrice('product6_price');
    addProductToCart('Product-6', prod6Price);
})
document.getElementById('product7_btn').addEventListener('click', function(){    
    const prod7Price  = productPrice('product7_price');
    addProductToCart('Product-7', prod7Price);
})
document.getElementById('product8_btn').addEventListener('click', function(){    
    const prod8Price  = productPrice('product8_price');
    addProductToCart('Product-8', prod8Price);
})
document.getElementById('product9_btn').addEventListener('click', function(){    
    const prod9Price  = productPrice('product9_price');
    addProductToCart('Product-9', prod9Price);
})


// Coupon Button
document.getElementById('coupon').addEventListener('keyup', function(event){
    const text = event.target.value;
    // console.log(text)
    const applyButton = document.getElementById('apply-btn');
    if( text === 'SELL200'){
        applyButton.removeAttribute('disabled');
    }
})