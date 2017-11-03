const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes/index')

app.set('view engine', 'hbs');

app.use('/', routes);















app.listen(port, () => {
  console.log('Listening on port', port);
})
