const express = require("express");
const routes = express.Router()

//basePath é o caminho base
const views = __dirname + "/views/"

//criar um objeto
const profile = {
   name: "Teresa",
   avatar: "https://xesque.rocketseat.dev/users/avatar/profile-db27254b-0432-4f77-a157-852603420f70-1597772278861.jpg",
   "monthly-budget": 3000,
   "days-per-week": 5,
   "hours-per-week": 5,
   "vacation-per-year": 4
}

//req de request(pesgunta) e res de response(resposta) 
//trocar senFile por render de renderizar
//não precisa basePath e trocar "/index.html" por "index"
routes.get('/', (req,res) => res.render(views + "index"))
routes.get('/job', (req,res) => res.render(views + "job"))
routes.get('/job-edit', (req,res) => res.render(views + "job-edit"))
routes.get('/profile', (req,res) => res.render(views + "profile", { profile}))

module.exports = routes;
