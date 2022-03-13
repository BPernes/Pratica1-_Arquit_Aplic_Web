const express = require('express');
const app=express();
const consign = require('consign');
const path = require('path');
const viewsPath = path.join(__dirname, "./src/views");

app.set('view engine', 'ejs');
app.set('views', viewsPath);

consign()
  .include('./src/routes')
  .then('./src/models') 
  .then('./src/controllers')
  .into(app);

const server = app.listen(3000,() => {
    const port = server.address().port;
    console.log(`Servidor ativado - porta: ${port}`);
});