import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

const start = () => {
    app.listen(PORT, console.log(`Lancement du serveur sur le port ${PORT}`))
}

start()