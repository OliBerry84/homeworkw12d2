document.addEventListener('DOMContentLoaded', () => {
  const url ='https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
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
  const beer = JSON.parse(jsonString);
  populateBeerList(beer);
}

const populateBeerList = function(beer){
  const ul = document.querySelector('#beer-list');
  beer.forEach((beer) => {
    const li = document.createElement('li');
    const beerImg = document.createElement('img')
    li.textContent = beer.name;
    beerImg.src = beer.image_url;
    beerImg.width = 50;
    ul.appendChild(li);
    ul.appendChild(beerImg)
  });
}
