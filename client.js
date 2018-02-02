'use strict';

var FkBoiBot = require('./bot.js');

var token = 'xoxb-309229310869-tUKphHsR1Fi8BGWsthtbjDil';
var name = 'fk_boi';

var fkBoiBot = new FkBoiBot({
  token: token,
  name: name,
  dbPath: './data.txt'
});

fkBoiBot.run();
console.log('Slack client is running');
