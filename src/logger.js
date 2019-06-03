'use strict';

const eventEmitter = require('./event-emitter.js');

eventEmitter.on('log write', (filename) => {
    console.log('👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌');
    console.log(`${filename} saved.`);
    console.log('👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌');
});