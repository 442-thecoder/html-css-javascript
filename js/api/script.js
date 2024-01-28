const mainDiv= document.getElementById('products')
fetch("https://fakestoreapi.com/products")
	.then(function (m) {
		console.log(m)
		return m.json()
	})
	.then(function (x) {
        console.log(x)
        displayData(x)
    })
function displayData (data)
{
    data.forEach(function (pro)
    {
        const product = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('p')
        const price = document.createElement('p')
        const btn= document.createElement('button')
        image.src = pro.image;
        image.alt = "sgdshgj";
        image.height="100"
       
        title.textContent = pro.title;
        price.textContent=pro.price
        btn.textContent = "Add to Cart"
        product.classList.add('product')
        product.append(image, title, price, btn)
        mainDiv.appendChild(product)
    })
    
}



