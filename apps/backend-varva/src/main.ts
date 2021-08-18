/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { numberUtils } from '@circular-ventures/number-utils';
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend-varva! ' + numberUtils()});
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
