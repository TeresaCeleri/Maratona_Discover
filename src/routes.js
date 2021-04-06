const express = require('express');

const routes = express.Router();

// basePath é o caminho base
const views = `${__dirname}/views/`;

// criar um objeto
const profile = {
  name: 'Teresa',
  avatar: 'https://github.com/teresaceleri.jpg',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-week': 5,
  'hours-per-day': 8,
  'vacation-per-year': 4,
};

// req de request(pesgunta) e res de response(resposta)
// trocar senFile por render de renderizar
// não precisa basePath e trocar "/index.html" por "index"

//array - estrutura de dados
const jobs = [
  {
    id: 1,
    name: 'Pizzaria Gulas',
    'daily-hours': 2,
    'total-hours': 60,
    createdAt: Date.now(),
  },
  {
    id: 2,
    name: 'OneTwo Project',
    'daily-hours': 3,
    'total-hours': 52,
    createdAt: Date.now(),
  },
];

routes.get('/', (req, res) => {
  const updateJobs = jobs.map(job => {
    //ajustes no job e calculo tempo restante
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed();

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + number(remainingDays);
    //const dueDate = created
    return job;
  });

  return res.render(views + 'index', { jobs });
});

routes.get('/job', (req, res) => res.render(views + 'job'));

routes.post('/job', (req, res) => {
  //req.body = { name: 'Teresa Celeri', 'daily-hours': '4', 'total-hours': '4' }

  //procura o ultimo id, senao tiver nenhum, traz 1
  const lastId = jobs[jobs.length - 1]; //?.id || 1; //qtos elem tem no array

  jobs.push({
    id: lastId + 1, //pega o proximo
    name: req.body.name,
    'daily-hours': req.body['daily-hours'],
    'total-hours': req.body['total-hours'],
    createdAt: Date.now(), //atribuindo data de hj
  });
  return res.redirect('/');
});

routes.get('/job-edit', (req, res) => res.render(views + 'job-edit'));

routes.get('/profile', (req, res) =>
  res.render(views + 'profile', { profile })
);

module.exports = routes;
