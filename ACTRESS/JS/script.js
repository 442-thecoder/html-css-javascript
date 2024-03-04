let productsData=[]
 const maindiv = document.getElementById('mainpage')
 fetch("https://freetestapi.com/api/v1/actresses")
 .then(function (res) {
     console.log(res)
     return res.json()
 })
 .then(function (data) {
     console.log(data)
     productsData=data;
     displayData(data)
 })
 function displayData(data)
 {
     maindiv.textContent=""
     data.forEach(actress => {
     const subdiv = document.createElement('div')
     const infolink= document.createElement('a')
     infolink.href= `info.html?actress=${encodeURIComponent(JSON.stringify(actress))}`
     const name = document.createElement('h3')
     name.textContent = actress.name
     const born = document.createElement('h4')
     born.textContent = actress.birth_year
     const nationality = document.createElement('h4')
     nationality.textContent = actress.nationality
     const image = document.createElement('img')
     image.src = actress.image
     alt = "actress"
     infolink.appendChild(name)
     subdiv.append(image,infolink,born,nationality)
     subdiv.classList.add('subdiv')
     maindiv.appendChild(subdiv)

    });
 }


 const inp = document.getElementById('input')
 const stn = document.getElementById('sbtn')
 function filterItems()
 {
     
     alert(inp.value)
    const values =productsData.filter((actress) =>
    {
     console.log(actress.name)
     return inp.value.toLowerCase()==actress.name.toLowerCase()
    })
    console.log(values)
    displayData(values)
      
 } 
//  "https://freetestapi.com/api/v1/actresses?search=[query]"

















//  const maindiv = document.getElementById('mainpage')
// fetch("https://freetestapi.com/api/v1/weathers")
//  .then(function (res) {
//     console.log(res)
//      return res.json()
//  })
//  .then(function (data) {
//     console.log(data)
//     displayData(data)
//  })
//  function displayData(data)
// {
//     data.forEach(weather => {
//     const subdiv = document.createElement('div')
//     const city = document.createElement('h1')
//     city.textContent = weather.city
//     const country = document.createElement('h2')
//     country.textContent = weather.country
//     const temperature = document.createElement('h3')
//     temperature.textContent = weather.temperature
//     const humidity= document.createElement('p')
//     humidity.textContent = weather.humidity
//     const weatherdescription = document.createElement('h5')
//     weatherdescription.src = weather.weather_description
//      data.forEach(forecast=>{
//         const sub1div = document.createElement('div')
//         const date = document.createElement('h1')
//         date.textContent = forecast.date
//         const temperature = document.createElement('h2')
//         temperature.textContent = forecast.temperature
//         const weatherdescription = document.createElement('h3')
//         weatherdescription.textContent =forecast.weather_description
//         sub1div.append(date,temperature,weatherdescription)
//         subdiv.appendChild(sub1div)
   
//      })
//     subdiv.append(city,country,temperature,weatherdescription,humidity)
//     maindiv.appendChild(subdiv)

//      });
// }
