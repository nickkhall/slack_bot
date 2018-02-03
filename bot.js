'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var sql = require('sqlite3').verbose();
var Bot = require('slackbots');
require('dotenv').config();

var FkBoiBot = function Constructor(settings) {
  this.settings = settings;
  this.settings.name = this.settings.name || 'fk_boi';
  // this.dbPath = settings.dbPath || path.resolve(process.cwd(), 'data', fkboi.db);

  this.user = null;
  this.db = null;
};

util.inherits(FkBoiBot, Bot);


FkBoiBot.prototype.run = function() {
  FkBoiBot.super_.call(this, this.settings);

  this.on('start', this._onStart);
  this.on('message', this._onMessage);
};

FkBoiBot.prototype._onStart = function() {
  this._loadBotUser();
  this._connectDb();
  this._firstRunCheck();
};

FkBoiBot.prototype._loadBotUser = function() {
  var self = this;

  this.user = this.users.filter(function(user) {
    return user.name === self.name;
  })[0];
};

FkBoiBot.prototype._connectDb = function() {
  // if (!fs.existsSync(this.dbPath)) {
  //   console.error('Database path ' + '"' + this.dbPath + '" does not exist or it\'s not readable.');
  //   process.exit(1);
  // }
  //
  // this.db = new sql.Database(this.dbPath);
};

FkBoiBot.prototype._firstRunCheck = function() {
  var self = this;

  // self.db.get('SELECT val FROM info WHERE name = "lastrun" LIMIT 1', function(err, record) {
  //   if (err) {
  //     return console.error('DATABASE ERROR:', err);
  //   }
  //
  //   var currentTime = (new Date()).toJSON();
  //
  //   if (!record) {
  //     self._welcomeMessage();
  //     return self.db.run('INSERT INTO info(name, val) VALUES("lastrun", ?)', currentTime);
  //   }
  //
  //   self.db.run('UPDATE info SET val = ? WHERE name = "lastrun"', currentTime);
  // });
};

FkBoiBot.prototype._welcomeMessage = function() {
  this.postMessageToChannel(this.channels[0].name, 'Hi guys, im a fuck bitch!', { as_user: true });
};

FkBoiBot.prototype._isChatMessage = function(message) {
  return message.type === 'message' && typeof message.text !== 'undefined';
};

FkBoiBot.prototype._isChannelConversation = function(message) {
  return typeof message.channel === 'string' && message.channel[0] === 'C';
};

FkBoiBot.prototype._isFromFkBoiBot = function(message) {
  return message.user === this.user.id;
};

FkBoiBot.prototype._isMentioningFkBoi = function(message) {
  if(typeof message.text !== 'undefined') {
    return message.text.indexOf(this.user.id) > -1;
  }
};

FkBoiBot.prototype._getChannelById = function(channelId) {
  return this.channels.filter(function(item) {
    return item.id === channelId;
  })[0];
};

FkBoiBot.prototype._generateResponse = function(message) {
  const msgRec = message.text.replace(/\<\@.{0,}\>\s/g, '').toLowerCase();

  if (msgRec.match(/shut\sup/g) ||
      msgRec.match(/fuck\soff/g)
  ) {
    return 'ysr'
  }
}

FkBoiBot.prototype._replyWithRandomResponse = function(originalMessage, funkyTime) {
  var self = this;
  var channel = self._getChannelById(originalMessage.channel);

  if(funkyTime) {
    self.postMessageToChannel(channel.name, 'HOUGHHHHHHHHHH SQWEENY!!!', { as_user: true });
    return;
  }

  self.postMessageToChannel(channel.name, this._generateResponse(originalMessage), { as_user: true });
};

FkBoiBot.prototype._onMessage = function(message) {
  const isFunky = (15 === Math.floor(Math.random(1) * 100) + 1);

  if (message.type === 'user_typing' && isFunky) {
    this._replyWithRandomResponse(message, true);
    return;
  }

  if (this._isChatMessage(message) &&
    this._isChannelConversation(message) &&
    !this._isFromFkBoiBot(message)) {
      let msgRec = message.text.replace(/\<\@.{0,}\>\s/g, '').toLowerCase();

      if (msgRec.match(/(cute)|(cutie)/g)) {
        var channel = this._getChannelById(message.channel);

        this.postMessageToChannel(channel.name, 'You\'re kinda hotcuute!', { as_user: true });
        return;
      }
    }

  if (this._isChatMessage(message) &&
    this._isChannelConversation(message) &&
    !this._isFromFkBoiBot(message) &&
    this._isMentioningFkBoi(message)
  ) {
    this._replyWithRandomResponse(message, false);
  }
};

module.exports = FkBoiBot;
