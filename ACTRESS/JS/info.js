const infopage = document.getElementById('infopage')
const params = new URLSearchParams(window.location.search)
const actress = params.get('actress')
const actressinfo = JSON.parse(decodeURIComponent(actress))
console.log(actressinfo)
const sub2div = document.getElementById('info')
const born = document.createElement('h4')
born.textContent = actressinfo.birth_year
const nationality = document.createElement('h4')
nationality.textContent =actressinfo.nationality
const awards= document.createElement('p')
awards.textContent = actressinfo.awards
const biography= document.createElement('p')
biography.textContent = actressinfo.biography
const image = document.createElement('img')
image.src = actressinfo.image
alt = "actress"
sub2div.classList.add('div2')
sub2div.append(born,nationality,awards,biography)
infopage.append(image,sub2div)
infopage.classList.add('infopage')

