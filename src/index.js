const express = require('express');
const cluster = require('cluster')
const os = require('os')
const http = require('http')

const apisRoutes = require('./routers/app.routers');
const { errorLog } = require('./middlewares/logger');

const mode = process.argv[3] == 'cluster';
const app = express();

const server = http.createServer(app)

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use(apisRoutes);

if (mode && cluster.isPrimary) {
  console.log('Primary process PID =>', process.pid)
  
  const numCPUs = os.cpus().length
  console.log('No. de nucleos => ', numCPUs)

  for (let i = 0; i < numCPUs; i++) cluster.fork();

  cluster.on('exit', (worker, code) => {
    console.log('Worker ', worker.process.pid, `Exitted on ${new Date().toLocaleDateString()}`);
    cluster.fork()
  })
} else {
  const PORT = process.env.PORT || 8081;
  const runningServer = server.listen(PORT, async () => {
  });
  
  runningServer.on('error', async (error) => {
    errorLog(error.message);
  });
}