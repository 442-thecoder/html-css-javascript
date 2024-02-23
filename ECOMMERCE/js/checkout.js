const cartDetails = document.getElementById("cart-details")
const cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
const total = document.getElementById("total")
displayData(cart)
function displayData(data)
{
    cartDetails.textContent = ""
    data.forEach((pro,index) => {
        const product = document.createElement('div')
        const image = document.createElement('img')
        image.src = pro.image
        image.alt="abc"
        const title = document.createElement('h5')
        title.textContent=pro.title
        const price = document.createElement('h4')
        price.textContent="$"+pro.price
        // const btn = document.createElement('button')
        const deleteButton = document.createElement("button")
		deleteButton.textContent = "❎"
		deleteButton.setAttribute("data-id", index)
		deleteButton.addEventListener("click", remove)
        product.classList.add('product')
        product.append(image,title,price,deleteButton)
        cartDetails.appendChild(product)
        cartDetails.classList.add('cartDetails')


        
    });
    const t = data.reduce((sum, pro) => sum + pro.price, 0)
	console.log(t)
	total.textContent ="$"+ t;
}
function remove(e) {
	const index = e.target.getAttribute("data-id")
	const res = confirm("Are you sure to delete?")
	if (res) {
		cart.splice(index, 1)
		displayData(cart)
        // countSpan.getElementById('data-id').textContent=index
	}
}

