import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/projeto.html');
})

app.get("/Servicos", (req, res) => {
    res.sendFile(__dirname + '/servicos.html');
})

app.get("/Sobre", (req, res) => {
    res.sendFile(__dirname + '/sobre.html');
})

app.get("/Contato", (req, res) => {
    res.sendFile(__dirname + '/contato.html');
})

app.listen(port, () => {
    console.log(`Mensagem envianda ao canal ${port}`);
})