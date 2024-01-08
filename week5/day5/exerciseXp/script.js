console.log('ver 2.3 ajax');

const button = document.querySelector('#button');
const names = document.querySelector('#name');
const height = document.querySelector('#height');
const gender = document.querySelector('#gender');
const birthYear = document.querySelector('#birth-year');
const homeWorld = document.querySelector('#home-world');

function getInfo() {
  updateWithLoading();

  const randomNumber = Math.floor(Math.random() * 88) + 1;
  const apiUrl = `https://swapi.dev/api/people/${randomNumber}/`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      updateInfo(data);
      return fetch(data.homeworld);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(homeWorldData => {
      updateInfo2(homeWorldData);
    })
    .catch(error => {
      console.error('Error:', error);
      updateInfoWithError();
    });
}

function updateInfo(resp) {
  names.innerText = resp.name;
  height.innerText = `Height: ${resp.height}`;
  gender.innerText = `Gender: ${resp.gender}`;
  birthYear.innerText = `Birth Year: ${resp.birth_year}`;
}

function updateInfo2(re) {
  homeWorld.innerText = `Home World: ${re.name}`;
}

function updateInfoWithError() {
  names.innerText = 'Oh No! That person isnt available.';
  height.innerText = '';
  gender.innerText = '';
  birthYear.innerText = '';
  homeWorld.innerText = '';
}

function updateWithLoading() {
  names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  height.innerText = '';
  gender.innerText = '';
  birthYear.innerText = '';
  homeWorld.innerText = '';
}

button.addEventListener('click', getInfo);
