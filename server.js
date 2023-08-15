 require ("dotenv").config()
 const express = require("express");
 const {dbConnect} = require("./config/dbconnect")



 const app = express();

 const PORT = process.env.PORT || 7000

 // middleware
 // routes
 // Error handling


 //Spin DB and Listen 

 dbConnect().then(()=>{
        app.listen(PORT,
      console.log(`Server listening of port ${PORT}`)
    )}
 );
    
