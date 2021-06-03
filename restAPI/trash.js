router.route('/setRecord' ,async(req, res, next)=>{
  let { queueName, payload } = req.body;
  await publishToQueue(queueName, payload);
  res.statusCode = 200;
  res.data = {"message-sent":true};
  next();
})
require('rabbitmq');


// Final
router.route('/setRecord' ,async(req, res, next)=>{
	console.log("Waiting for messages in %s", queue);
	let { queueName, payload } = req.body;
	await publishToQueue(queueName, payload);
	res.statusCode = 200;
	res.data = {"message-sent":true};
	next();
})