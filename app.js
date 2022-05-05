const express = require("express");
const path = require("path");
const app = express();
const port = 3031;

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "views", "home.html")));

app.get("/ofertas", (req,res) => res.sendFile(path.resolve(__dirname, "views", "ofertas.html")));

app.get("/tienda", (req,res) => res.sendFile(path.resolve(__dirname, "views", "tienda.html")));

app.get("/vender", (req,res) => res.sendFile(path.resolve(__dirname, "views", "vender.html")));

app.get("/ayuda", (req,res) => res.sendFile(path.resolve(__dirname, "views", "ayuda.html")));

app.get("/crear", (req,res) => res.sendFile(path.resolve(__dirname, "views", "crear.html")));

app.get("/ingresar", (req,res) => res.sendFile(path.resolve(__dirname, "views", "ingresar.html")));

app.get("/compras", (req,res) => res.sendFile(path.resolve(__dirname, "views", "compras.html")));

app.listen(port, () => console.log(`Servidor corriendo en el puerto 3030 http://localhost:${port}`))