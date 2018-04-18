let beers = [];

document.addEventListener('DOMContentLoaded', () => {
  const url ='https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);

  const option = document.querySelector('#beerdropdown-list');
  option.addEventListener('change', handleBeerSelection);
});

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}

const requestComplete = function(){
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  beer = JSON.parse(jsonString);
  populateBeerList(beer);
}

const populateBeerList = function(beer){
  const select = document.querySelector('#beerdropdown-list');
  beer.forEach((beer, index) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    const value = index;
    option.value = value;
    select.appendChild(option);
  });
}

const handleBeerSelection = function(event){
  const beers = beer[this.value]
  displayBeerInformation(beers);
  }

const displayBeerInformation = function(beer){
  const beerInformation = document.querySelector('#beer-list')
  beerInformation.innerHTML = ''

  const beerName = document.createElement('h2');
  const beerImage = document.createElement('img');
  const beerIngredients = document.createElement('h5')
  const beerDescription = document.createElement('p')
  const beerFoodPairing = document.createElement('p')

  beerName.textContent = beer.name;
  beerImage.src = beer.image_url;
  beerImage.width = 75;
  // beerIngredients.textContent = beer.ingredients;
  beerDescription.textContent = beer.description;
  beerFoodPairing.textContent = `Get plastered while you eat ${beer.food_pairing}`


  beerInformation.appendChild(beerImage);
  beerInformation.appendChild(beerName);
  // beerInformation.appendChild(beerIngredients);
  beerInformation.appendChild(beerDescription);
  beerInformation.appendChild(beerFoodPairing);
}
