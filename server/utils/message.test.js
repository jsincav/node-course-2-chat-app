const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generage correct message object', () => {
        var from = "Jeff";
        var text = "hello there";
    
        var message = generateMessage(from, text);
        expect(message).toInclude({from,text});
        expect(message.createdAt).toBeA('number');
    
    });

});