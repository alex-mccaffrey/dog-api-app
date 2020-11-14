'use strict';

function getDogImages(inputValue) {
    console.log('getting images');
    let dogsApi = `https://dog.ceo/api/breeds/image/random/${inputValue}`;
    fetch(dogsApi)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }


  function displayResults(responseJson) {
    console.log(responseJson);
    let arrayOfImg = responseJson.message;
    let display = getImages(arrayOfImg); 
    $('.results-img').replaceWith(display);
    $('.images').removeClass('hidden');
  }

  function getImages(arrayOfImg){
    let valueToReturn = ''; 
    for (let i = 0; i < arrayOfImg.length; i++){
      valueToReturn += `<img src="${arrayOfImg[i]}" class="results-img">`;
    } 
    return valueToReturn;
}


  function userSubmit() {
    $('form').submit( event => {
        console.log('submitting');
      event.preventDefault();
      let inputValue = $('#numDogs').val();
      getDogImages(inputValue);
      console.log(inputValue);
    });
  }

function runDogApp() {
    userSubmit();
}

  $(runDogApp());
