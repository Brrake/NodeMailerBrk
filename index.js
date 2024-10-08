const express = require("express");
const helmet = require("helmet");
require('dotenv').config();

/* App */
const app = express();
app.use(helmet());

/* Body Parser */
require('./app/utils/body-parser')(app);
/* Routes */
require('./app/routes')(app);

/* Start Server */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on : http://localhost:' + PORT)
});
