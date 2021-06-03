// Initialize express router
let router = require('express').Router();
const amqp = require('amqplib/callback_api');
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Hurrry!',
        message: 'Move to http://localhost:8080/api/getRecords to view contacts',
    });
});
// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/getRecords/:contact_id')
    .get(contactController.index);
    //.post(contactController.new);
router.route('/setRecord')
	.post(contactController.new);
// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);
// Export API routes
module.exports = router;