const products = document.getElementById('productpage')
const cartbtn = document.getElementById('cartbutton')
cartbtn.addEventListener("click",checkout)
fetch("https://fakestoreapi.com/products/")
.then(function (res) {
    console.log(res)
    return res.json()
})
.then(function (data) {
    console.log(data)
    displayData(data)
})
let count = 0;
let cart = []
function displayData(data)
{
    data.forEach((pro,index) => {
        const product = document.createElement('div')
        const productLink= document.createElement('a')
        productLink.href= `products.html?product=${encodeURIComponent(JSON.stringify(pro))}`
        const image = document.createElement('img')
        image.src = pro.image
        image.alt="abc"
        const title = document.createElement('h6')
        title.textContent=pro.title
        const price = document.createElement('h4')
        price.textContent="$"+pro.price
        const btn = document.createElement('button')
        btn.textContent="Add to cart"
        btn.setAttribute('data-cart', JSON.stringify(pro))
        btn.addEventListener("click",addCart)
        product.classList.add('product')
        productLink.appendChild(title)
        productLink.classList.add('prolink')
        product.append(image,productLink,price,btn)
        products.appendChild(product)


        
    });
}
const countSpan=document.getElementById('count')
function addCart(e)
 {
     const btn = e.target
     const data = JSON.parse(btn.getAttribute('data-cart'))
     cart.push(data)
     count++;
     countSpan.textContent = count
    // document.getElementById('count').textContent=count;
     console.log(cart)
 }
 function checkout ()
 {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href="./checkout.html"
}

function filter()
{
    let filter =document.getElementById('input').value.toUpperCase();
    let item = document.getElementById('productpage');
    let l = document.getElementsByTagName('h6');
    
    for (var i = 0;i<=l.length;i++)
    {
        let a = item[i].getElementsByTagName('h6')[0];
         let value = a.innerHTML || a.innerText || a.textContent;
         if(value.toUpperCase().indexOf(filter) > -1)
         {
            item[i].style.display="";
         }
         else
         {
            item[i].style.display="none";
         }
    }
}
