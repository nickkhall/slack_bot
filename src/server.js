#!/usr/local/bin/node

import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.listen(3000);

console.log(`Express server running on port ${port}`);

fetch('https://slack.com/api/bots.info',
  {
    method: 'GET',
    headers: {
      token: 'xoxb-309229310869-WwOD1IPPSDwBEAtFKb1Ll9OY',
      Accept: 'application/x-www-form-urlencoded'
    },
    mode: 'cors'
  }
)
.then(res => {
  if(res) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(new Error('Failed to load'));
  }
})
.then(res => res.json())
.then(data => console.log({ data }))
.catch((err) => {
  console.log('ERROR:', `${err.message}`);
});
