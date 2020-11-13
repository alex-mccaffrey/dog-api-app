function getDogImages() {
    console.log('getting images');
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
      /*.then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
      console.log($(responseJson));*/
  }

  function userSubmit() {
    $('form').on('click', '#submit', event => {
        console.log('submitting');
      event.preventDefault();
      getDogImages();
    });
  }

