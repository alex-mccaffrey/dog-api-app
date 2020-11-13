function getDogImages() {
    console.log('getting images');
    fetch('https://dog.ceo/api/breeds/image/random/'+numberOfImages())
      .then(response => response.json())
      .then(responseJson => displayImages(responseJson));
      /*.then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
      console.log($(responseJson));*/
  }

  function numberOfImages(){
     let number = document.getElementById('numDogs').value;
     console.log(number);
     return number;
  }

  function displayImages() {
    console.log(resultsJson);
    
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