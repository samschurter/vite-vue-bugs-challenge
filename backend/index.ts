import {Request, Response} from 'express';
import {randomBytes} from 'crypto';
import * as fs from 'fs';

const authToken = randomBytes(32).toString('hex');

const users = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const shouldThrottle = () => Math.random() < 0.3;

/**
 * 
  curl localhost:8080/getAuthToken

  curl -H "Authorization: Bearer fbb55f8a739af59a9f5f65b592c82461c6b9797e91b87eeeb97150caf44bf4c2" localhost:8080/listUsers | jq

  curl -H "Authorization: Bearer fbb55f8a739af59a9f5f65b592c82461c6b9797e91b87eeeb97150caf44bf4c2" localhost:8080/getUser?userID=JBD79IMZ2DG | jq 
 */

const jsonServer = async (req: Request, res: Response) => {
  const logData = {
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path,
    query: req.query,
    headers: req.headers,
    body: req.body,
    // user agent
    ua: req.headers['user-agent'],
    // ip address
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
  };
  // log the request
  console.log(JSON.stringify(logData, null, 2) + "\n\n");
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Max-Age', '86400');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }
  const waitTimeMs = 1000 + Math.floor(Math.random() * 1000);
  
  switch (req.path) {
    case '/getAuthToken':
      res.status(200).json({token: authToken, expiration: (new Date(Date.now() + 86400000)).getTime()})
      break;
    case '/listUsers':
      await delay(waitTimeMs);
      if (req.headers.authorization !== `Bearer ${authToken}`) {
        res.status(401).json({error: 'Unauthorized'});
        return;
      }
      if (shouldThrottle()) {
        res.status(429).send('<h1>429 Too Many Requests</h1>');
        return;
      }
      const userIds = users.map(user => ({
        id: user.id,
        name: user.name,
      }));
      res.status(200).json(userIds)
      break;
    case '/getUser':
      if (req.headers.authorization !== `Bearer ${authToken}`) {
        res.status(401).json({error: 'Unauthorized: Invalid Token or No Token Provided'});
        return;
      }
      const userId = req.query.userID;
      if (!userId) {
        res.status(400).json({error: 'Bad Request: Missing User ID'});
        return;
      }
      const user = users.find(user => user.id === userId);
      if (!user) {
        res.status(404).json({error: 'User Not Found'});
        return;
      }
      res.status(200).json(user);
      break;
    default:
      res.status(404).json({error: 'API Not Found'});
  }
};

export {jsonServer};
