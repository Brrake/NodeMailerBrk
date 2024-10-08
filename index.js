const express = require("express");
/* App */
const app = express();
require('dotenv').config();

/* Body Parser */
require('./app/utils/body-parser')(app);
/* Routes */
require('./app/routes')(app);

/* Start Server */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port : ' + PORT)
});
