const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/Base.err');
const errorHandler = require('./utils/errorHandler');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// GET /ping - Ping the main service (working)
app.get('/ping', (req, res) => {
  return res.json({ message: 'Problem service is alive' });
});

// Mount API routes at /api (working)
app.use('/api', apiRouter);

app.use(errorHandler); //last middleware when an error comes
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  // try {
  //   throw new BaseError('some error', 404, 'something went wrong', {});
  // } catch (err) {
  //   console.log('something went wrong', err);
  // } finally {
  //   console.log('executed finally');
  // }
});
