const express = require( 'express' );

const app = express();

// Load weather data
const data = require( './data.js' );

// GET route
app.get( '/weather', ( req, res ) => {
    // query string
    let cityName = req.query.city.toLowerCase();
// iterate through the data
    for ( let i = 0; i < data.length; i++ ){
        // check for city name
        if ( !cityName ) {
            res.send({"Status": "error", "message": "Please enter a correct city"})
        } else if ( cityName === data[ i ].city.toLowerCase() ) {
            
            return res.send( data[ i ] );
        }
    }
    // no match
     res.send({"Status": "error", "message": "This city name is not in our database"})
   
} )

// port var
const PORT = process.env.PORT || 3000;

app.listen( PORT, () => console.log(`Sever running on port ${PORT}`) );