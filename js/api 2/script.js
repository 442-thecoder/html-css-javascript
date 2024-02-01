const mainDiv= document.getElementById('products')
fetch("https://dummyjson.com/quotes")
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
    data.quotes.forEach(function (pro)
    {
        const product = document.createElement('div')
        const id = document.createElement('h2')
        const quote = document.createElement('h3')
        const author = document.createElement('p')
        author.textContent = pro.author;
        quote.textContent=pro.quote
        id.textContent=pro.id
        product.classList.add('product')
        product.append(id,author,quote,)
        mainDiv.appendChild(product)
    })
    
}