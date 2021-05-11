var mongoose = require('mongoose');
var taskSchema = mongoose.Schema({
    what: {
        type: String,
        required: true
    },
    priority: String

});
var Task = module.exports = mongoose.model('task', taskSchema);
module.exports.get = function (callback, limit) {
    Task.find(callback).limit(limit);
}
