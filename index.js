const express = require('express');
const declaration = require('./topics/declaration.topic')


const app = express();


declaration();


app.listen(3001, () => {
    console.log('Server run at PORT 3001')
})