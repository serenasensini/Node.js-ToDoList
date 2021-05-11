Task = require('../model/task');

exports.index = function (req, res) {
    Task.get(function (err, tasks) {
        if (err) return res.status(400).send({ success: false, err });
        res.json({
            success: true,
            message: "Tasks retrieved successfully",
            data: tasks
        });
    });
};

exports.new = async function (req, res) {
    var task = new Task();
    task.what = req.body.what ? req.body.what : task.what;
    task.priority = req.body.priority;
    task.save(function (err) {
        if (err) return res.status(400).send({ success: false, err });
        else
            res.json({
                success: true,
                message: 'New task created!',
                data: task
            });
    });

};

exports.view = function (req, res) {
    Task.findById(req.params.task_id, function (err, task) {
        if (err) return res.status(400).send({ success: false, err });
        res.json({
            success: true,
            message: 'Task details loading..',
            data: task
        });
    });
};

exports.update = function (req, res) {
    Task.findById(req.params.task_id, function (err, task) {
        if (err) return res.status(400).send({ success: false, err });
        task.what = req.body.what ? req.body.what : task.what;
        task.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                success: true,
                message: 'Task info updated',
                data: task
            });
        });
    });
};

exports.delete = function (req, res) {
    Task.remove({
        _id: req.params.task_id
    }, function (err, task) {
        if (err) return res.status(400).send({ success: false, err });
        res.json({
            success: true,
            message: 'Task deleted'
        });
    });
};
