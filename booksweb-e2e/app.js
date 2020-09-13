let express=require('express');

require('dotenv').config();

let app=express();


const staticPath='./client';
//step 1: map the static files including the angular files
app.use(express.static('client'));

//step 2: map the api route
let booksApiRouter=require('./server/routes/book-api-controller');
app.use('/api/books',booksApiRouter);

//Step 3: map all the remaining route to angular's index.html
app.get( '/*', function ( req, res ) {
    res.status( 200 ).set( { 'content-type': 'text/html; charset=utf-8' } )
    .sendfile( staticPath + '/index.html' );
})




const port = process.env.PORT || 9000;
app.listen(port , (err)=>{

    if(err){
        console.log(`error starting server on port ${port}`);
    } else {
        console.log( `server running on port ${port}`);
    }
});