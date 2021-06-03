const amqp = require('amqplib/callback_api');
const sendMsgToQueue = (queue, msg)=> {
  amqp.connect('amqp://localhost/db', function(error, connection) {
    if (error) {
      throw error;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue(queue, {
        durable: false
      });
      channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true
      });
      console.log("Sent '%s'", msg);
      
      setTimeout(function() {
        connection.close();
      }, 500);
    }); 
  });
};
module.exports = sendMsgToQueue;