const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));




app.use(routes);




app.listen(3030, ()=>{
    console.log(`Server running on the porta 3030`);
})