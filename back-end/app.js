require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movies_route');
const orderRoutes = require('./routes/order_routes');
const helmet = require('helmet');
const cors = require('cors');
//express
const app = express();
app.use(cors()) // used for cross site 
app.use(bodyParser.json()) //use = for middelwares
app.use(helmet())
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.port}`);
});
app.use('/', movieRoutes);
app.use('/', orderRoutes);