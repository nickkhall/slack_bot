#!/usr/local/bin/node
'use strict';

var FkBoiBot = require('./bot.js');

console.log({ FkBoiBot });

var token = process.env.SLACK_API_KEY;
var name = 'fk_boi';
// 
// var fkBoiBot = new FkBoiBot({
//   token: token,
//   name: name,
//   dbPath: './data.txt'
// });

// fkBoiBot.run();
console.log('Slack client is running');
