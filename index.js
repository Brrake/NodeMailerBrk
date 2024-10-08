const express = require("express");
const app = express();
require('dotenv').config();

require('./app/routes/routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port : ' + PORT)
});
