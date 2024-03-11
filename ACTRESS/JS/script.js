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
//  function displayData(data)
//  {
//      maindiv.textContent=""
//      data.forEach(actress => {
//      const subdiv = document.createElement('div')
//      const infolink= document.createElement('a')
//      infolink.href= `info.html?actress=${encodeURIComponent(JSON.stringify(actress))}`
//      const name = document.createElement('h3')
//      name.textContent = actress.name
//      const born = document.createElement('h4')
//      born.textContent = actress.birth_year
//      const nationality = document.createElement('h4')
//      nationality.textContent = actress.nationality
//      const image = document.createElement('img')
//      image.src = actress.image
//      alt = "actress"
//      infolink.appendChild(name)
//      subdiv.append(image,infolink,born,nationality)
//      subdiv.classList.add('subdiv')
//      maindiv.appendChild(subdiv)

//     });
//  }


//  const inp = document.getElementById('input')
//  const stn = document.getElementById('sbtn')
//  function filterItems()
//  {
     
//     //  alert(inp.value)
//     const values =productsData.filter((actress) =>
//     {
//      console.log(actress.name)
//      return inp.value.toLowerCase()==actress.name.toLowerCase()
//     })
//     console.log(values)
//     displayData(values)
      
//  } 
const inp = document.getElementById('input');
const output = document.getElementById('mainpage');
const autocompleteList = document.getElementById('autocomplete-list');

// Function to filter items based on input
function filterItems() {
  const inputText = inp.value.toLowerCase();
  const values = productsData.filter((actress) =>
    actress.name.toLowerCase().includes(inputText)
  );
  displayData(values);
  showAutocomplete(values);
}

// Function to display filtered data
function displayData(data) {
  output.innerHTML = ""; // Clear previous results
  if (data.length === 0) {
    output.innerHTML = "No matching items found.";
    return;
  }
  data.forEach((item) => {
    const itemElement = document.createElement('div');
    const infolink= document.createElement('a')
    infolink.href= `info.html?actress=${encodeURIComponent(JSON.stringify(item))}`
    const name = document.createElement('h3')
    name.textContent = item.name
    const born = document.createElement('h4')
    born.textContent =  item.birth_year
    const nationality = document.createElement('h4')
    nationality.textContent = item.nationality
    const image = document.createElement('img')
    image.src = item.image
    alt = "actress"
    infolink.appendChild(name)
    output.appendChild(itemElement);
    itemElement.append(image,infolink,born,nationality)
    itemElement.classList.add('subdiv')
  });
}

// Function to display autocomplete suggestions
function showAutocomplete(data) {
  autocompleteList.innerHTML = ""; // Clear previous suggestions
  if (inp.value === "") {
    autocompleteList.style.display = "none";
    return;
  }
  data.forEach((item) => {
    if (item.name.toLowerCase().includes(inp.value.toLowerCase())) {
      const suggestion = document.createElement('li');
      suggestion.textContent = item.name;
      suggestion.addEventListener('click', () => {
        inp.value = item.name;
        filterItems();
      });
      autocompleteList.appendChild(suggestion);
    }
  });
  autocompleteList.style.display = "block";
}

// Event listener for input field change
inp.addEventListener('input', filterItems);

// Event listener for input field blur (hide autocomplete when focus is lost)
inp.addEventListener('blur', () => {
  autocompleteList.style.display = "none";
});
 


















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
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Autocomplete Search</title>
// <style>
//   #autocomplete-list {
//     border: 1px solid #ccc;
//     border-top: none;
//     list-style-type: none;
//     padding: 0;
//     margin: 0;
//     position: absolute;
//     z-index: 1000;
//     background-color: white;
//     width: 200px;
//   }
//   #autocomplete-list li {
//     padding: 10px;
//     cursor: pointer;
//   }
//   #autocomplete-list li:hover {
//     background-color: #f0f0f0;
//   }
// </style>
// </head>
// <body>

// <h2>Autocomplete Search</h2>

// <div class="autocomplete">
//   <input id="input" type="text" placeholder="Enter name...">
//   <ul id="autocomplete-list"></ul>
// </div>

// <div id="output"></div>

// <script>
// const productsData = [
//   { name: "Product A", price: 10 },
//   { name: "Product B", price: 20 },
//   { name: "Product C", price: 30 }
// ];

// const inp = document.getElementById('input');
// const output = document.getElementById('output');
// const autocompleteList = document.getElementById('autocomplete-list');

// // Function to filter items based on input
// function filterItems() {
//   const inputText = inp.value.toLowerCase();
//   const values = productsData.filter((product) =>
//     product.name.toLowerCase().includes(inputText)
//   );
//   displayData(values);
//   showAutocomplete(values);
// }

// // Function to display filtered data
// function displayData(data) {
//   output.innerHTML = ""; // Clear previous results
//   if (data.length === 0) {
//     output.innerHTML = "No matching items found.";
//     return;
//   }
//   data.forEach((item) => {
//     const itemElement = document.createElement('div');
//     itemElement.textContent = `${item.name} - $${item.price}`;
//     output.appendChild(itemElement);
//   });
// }

// // Function to display autocomplete suggestions
// function showAutocomplete(data) {
//   autocompleteList.innerHTML = ""; // Clear previous suggestions
//   if (inp.value === "") {
//     autocompleteList.style.display = "none";
//     return;
//   }
//   data.forEach((item) => {
//     if (item.name.toLowerCase().includes(inp.value.toLowerCase())) {
//       const suggestion = document.createElement('li');
//       suggestion.textContent = item.name;
//       suggestion.addEventListener('click', () => {
//         inp.value = item.name;
//         filterItems();
//       });
//       autocompleteList.appendChild(suggestion);
//     }
//   });
//   autocompleteList.style.display = "block";
// }

// // Event listener for input field change
// inp.addEventListener('input', filterItems);

// // Event listener for input field blur (hide autocomplete when focus is lost)
// inp.addEventListener('blur', () => {
//   autocompleteList.style.display = "none";
// });
