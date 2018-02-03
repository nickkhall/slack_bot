#!/usr/local/bin/node

require('dotenv').config();

import FkBoiBot from './bot.js';

let token = process.env.SLACK_API_KEY;
let name = 'fk_boi';

let fkBoiBot = new FkBoiBot({
  token: token,
  name: name
});

console.log('Slack client is running');
