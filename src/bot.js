#!/usr/local/bin/node

import util from 'util';
import path from 'path';
import fs from 'fs';
import Slack from 'slack';

const isUser = { as_user: true };
const token = process.env.SLACK_API_KEY;

const Bot = new Slack(token);



































































// export default class FkBoiBot extends Bot {
//   constructor(settings) {
//     super(settings);
//     this.settings = settings;
//
//     this.on('start', this.onStart);
//     this.on('message', this.onMessage);
//   }
//
//   onStart() {
//     this.loadBotUser();
//     // @TODO: Add methods for DB connections / etc.
//   }
//
//   loadBotUser() {
//     this.user = this.users.filter(u => user.name === this.name)[0];
//   }
//
//   welcomeMessage() {
//     this.postMessageToChannel(
//       this.channels[0].name,
//       'Hi guys, I\'m a fuck bitch! Fuck me right?! :D',
//       { as_user: true }
//     );
//   }
//
//   isChatMessage(msg) {
//     return msg.type === 'msg' && typeof msg.text !== 'undefined';
//   }
//
//   isChannelConversation(msg) {
//     return typeof msg.channel === 'string' && msg.channel[0] === 'C';
//   }
//
//   isFromFkBoiBot(msg) {
//     return msg.user === this.user.id;
//   }
//
//   isMentioningFkBoi(msg) {
//     if (typeof msg.text !== 'undefined') {
//       return msg.text.indexOf(this.user.id) > -1;
//     }
//   }
//
//   getChannelById(channelId) {
//     return this.channels.filter(item => item.id === channelId)[0];
//   }
//
//   generateResponse(msg) {
//     const msgRec = msg.text.replace(/\<\@.{0,}\>\s/g, '').toLowerCase();
//
//     if (msg.match(/shut\sup/g) ||
//         msg.match(/fuck\soff/g)
//     ) {
//       return 'ysr';
//     }
//   }
//
//   replyWithRandomResponse(origMsg, funkyTime) {
//     const channel = this.getChannelById(origMsg.channel);
//
//     if (funkyTime) {
//       this.postMessageToChannel(
//         channel.name,
//         'HOUGHHHHHHHHHH SQWEENY!!!',
//         isUser
//       );
//     }
//
//     this.postMessageToChannel(channel.name, this.generateResponse(origMsg), isUser)
//   }
//
//   onMessage(msg) {
//     const isFunky = (15 === Math.floor(Math.random(1) * 100) + 1);
//
//     if (msg.type === 'user_typing' && isFunky) {
//       this.replyWithRandomResponse(msg, true);
//       return;
//     }
//
//     if (this.isChatMessage(message) &&
//       this.isChannelConversation(message) &&
//       !this.isFromFkBoiBot(message)) {
//         let msgRec = message.text.replace(/\<\@.{0,}\>\s/g, '').toLowerCase();
//
//         if (msgRec.match(/(cute)|(cutie)/g)) {
//           var channel = this.getChannelById(message.channel);
//
//           this.postMessageToChannel(channel.name, 'You\'re kinda hotcuute!', { as_user: true });
//           return;
//         }
//       }
//
//     if (this.isChatMessage(message) &&
//       this.isChannelConversation(message) &&
//       !this.isFromFkBoiBot(message) &&
//       this.isMentioningFkBoi(message)
//     ) {
//       this.replyWithRandomResponse(message, false);
//     }
//   }
// }
