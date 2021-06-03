const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err0, connection) {
    if (err0) {
        throw err0;
    }
    connection.createChannel(function (err1, channel) {
        if (err1) {
            throw err1;
        }
        const queue = 'users';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.consume(
            queue,
            function (message) {
                console.log('Received %s', message.content.toString());
            },
            {
                noAck: true
            }
        );

    });
});
