function getDogImages() {
    console.log('getting images');
    let dogsApi = 'https://dog.ceo/api/breeds/image/random/' +numberOfImages();
    fetch(dogsApi)
      .then(response => response.json())
      .then(responseJson => displayImages(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

  function numberOfImages(){
     let number = document.getElementById('numDogs').value;
     console.log(number);
     return number;
  }

  function displayImages(responseJson) {
    console.log(responseJson);
    let dogPics = [];
    for (i=0; i<responseJson.message.length; i++){
        dogPics.push(`<img src="${responseJson.message[i]}" class="results-img">`);
    $('.results-img').replaceWith(dogPics)
    }
    $('.images').removeClass('hidden');
  }



  function userSubmit() {
    $('form').submit( event => {
        console.log('submitting');
      event.preventDefault();
      getDogImages();
    });
  }

function runDogApp() {
    userSubmit();
}

  $(runDogApp());