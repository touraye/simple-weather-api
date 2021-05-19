const form = document.querySelector( 'form' );
const textInput = document.getElementById( 'city' );

let cityName = textInput.value;

// update the cityName when an event it triggered
textInput.addEventListener( 'input', (e) => {
    cityName = e.target.value;
})


// event submit
form.addEventListener( 'submit', (e) => {
    e.preventDefault();
    console.log( cityName );

    // make request to our API
    axios.get( 'http://localhost:3000/weather/?city=' + cityName )
        .then( ( response ) => {
            // console.log( response.data );
                  // select elements
      let city = document.querySelector('.cityName');
      let celsius = document.querySelector('.celsius');
      let fahrenheit = document.querySelector('.fahrenheit');
          let errorMessage = document.querySelector( '.error-message' );
          
      if (response.data.city) {
        city.innerHTML = 'City: ' + response.data.city;
        celsius.innerHTML = 'Temperature (C): ' + response.data['temperature (C)'];
        fahrenheit.innerHTML = 'Temperature (F): ' + response.data['temperature (F)'];
      } else {
        errorMessage.innerHTML = "This city is not in our database"
      }
        } )
        .catch( ( err ) => console.log( err ) );

    // clear field
    textInput.value = '';
})