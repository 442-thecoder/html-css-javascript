const proddet = document.getElementById('prod-Detail')
const params = new URLSearchParams(window.location.search)
const product = params.get('product')
const productDetails = JSON.parse(decodeURIComponent(product))
console.log(productDetails)
const proimgs = document.getElementById("imgs")
const proInfo = document.getElementById("prod-info")
const title = document.createElement('h5');
title.textContent = productDetails.title;
const desc = document.createElement('p')
desc.textContent = productDetails.description;
const price = document.createElement('h4')
price.textContent = "$" + productDetails.price
const button = document.createElement('button')
button.textContent = "Add to cart"
const image = document.createElement('img')
image.src = productDetails.image;
proimgs.appendChild(image)
proInfo.append(title, desc, price, button)
pro-Detail.appendChild(proimgs,proInfo)