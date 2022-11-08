'use strict';

var { Client, IntentsBitField } = require('discord.js')

class Patent extends Client {
    constructor(token, prefix) {
        super({ intents: new IntentsBitField(7796), prefix: prefix });
        this.login(token)
    }
}

function checkClient(token, prefix, done) {
    new Patent(token, prefix).once('ready', client => {
        if (client.token != token) return done(false);
        else done(true);
        client.destroy();
    })
}

module.exports ={
    Patent,
    checkClient
}