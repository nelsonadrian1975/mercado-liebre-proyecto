const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')

app.use(express.static(path.resolve(__dirname, "public")))
app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))


/*app.get('/contacto', function (req, res) {
    res.send('Dejanos tu contacto')
})

app.get('/un-array', function (req, res) {
    res.send([1, 2, 3, 4, 5])
})

app.get('/un-objeto', function (req, res) {
    res.send({ name: 'Dario' })
})*/

app.get('/', function (req, res) {
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
})

app.get('/register', function (req, res) {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
})

app.get('/login', function (req, res) {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
})


