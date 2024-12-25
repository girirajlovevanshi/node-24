import express from 'express'

const app = express();



app.set('trust proxy', true); // Important for proxy environments



app.get('/', (req, res) => {

  const userIp = req.ip;

  console.log('User IP:', userIp);

  res.send('Your IP address is: ' + userIp);

});



app.listen(8080, () => console.log('Server listening on port 3000'));
