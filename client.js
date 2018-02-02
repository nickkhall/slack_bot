'use strict';

var FkBoiBot = require('./bot.js');

var token = '{ INSERT_TOKEN_HERE }';
var name = 'fk_boi';

var fkBoiBot = new FkBoiBot({
  token: token,
  name: name,
  dbPath: './data.txt'
});

fkBoiBot.run();
console.log('Slack client is running');
