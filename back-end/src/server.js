const express = require("express");
const wilderController = require("./Controller/Wilder");
const { initializeWilder } = require("./model/wilder/manager");

const app = express();


const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenu sur l'api de Wilder Site");
});

app.get("/wilders", wilderController.get);
app.post("/wilders", wilderController.post);

async function start()  {
    initializeWilder();
    app.listen(PORT, console.log(`Lancement du serveur sur le port ${PORT}`))
}

start();