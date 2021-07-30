require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

// settings
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// routes
app.use('/', require('./src/routes/routes'));
app.use('/api', require('./src/routes/api'));

// start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
