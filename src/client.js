#!/usr/local/bin/node

require('dotenv').config();

import FkBoiBot from './bot.js';

let token = process.env.SLACK_API_KEY;
let name = 'fk_boi';


console.log('Slack client is running');
