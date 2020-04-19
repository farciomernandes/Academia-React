const bodyparser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));




app.use(routes);




app.listen(3030, ()=>{
    console.log(`Server running on the porta 3030`);
})