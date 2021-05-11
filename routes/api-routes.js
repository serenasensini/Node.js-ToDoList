let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to webapp crafted with love!',
    });
});


var taskController = require('../controllers/taskController');
router.route('/tasks')
    .get(taskController.index)
    .post(taskController.new);

router.route('/tasks/:task_id')
    .get(taskController.view)
    .put(taskController.update)
    .delete(taskController.delete);


module.exports = router;
