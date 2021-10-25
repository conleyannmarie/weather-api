//beginning variables
const userFormEl = document.querySelector("#city");
const searchBtn = document.querySelector(".search");

const cityResult = userFormEl.value;
console.log(cityResult);

//fetch request and console log for weather
const apiKey = "2b5273ff9c8458a9e729503a2001b7f4";

const formSubmitHandler = function (event) {
  event.preventDefault();

  const cityResult = userFormEl.value.trim();
  findCity(cityResult);
  console.log(cityResult);

  const query =
    "https://api.openweathermap.org/data/2.5/onecall?lat=lat&lon=lon&exclude=part&appid=${apiKey}";

  fetch(query)
    .then((response) => response.json())
    .then((data) => console.log("data: ", data));
};


//display weather
const findBook = function (bookName) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
    // Converts the response to JSON
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const listSearch = response.items;
      //card block to display
      let template = "";
      listSearch.forEach((item) => {
        template += `
          <div class="card">
              <div class="card-content">
              <div class="media">
                  <div class="media-left">
                  <figure class="image is-48x48">
                      <img src="${item.volumeInfo.imageLinks.smallThumbnail}" alt="Placeholder image">
                  </figure>
                  </div>
                  <div class="media-content">
                  <p class="title is-4"></p>
                  <p class="subtitle is-6">${item.volumeInfo.authors}</p>
                  </div>
              </div>
          
              <div class="content">
                  ${item.volumeInfo.description}
              </div>
              </div>
          </div>
          `;

        // YOUR CODE HERE
        document.querySelector("#results-container").innerHTML = template;
      });
    });

 
searchBtn.addEventListener("click", formSubmitHandler);
