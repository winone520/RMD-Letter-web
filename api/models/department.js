const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;

const Department = new Schema({
	deptID : String,
	title : String,
	body : String
});

module.exports = mongoose.model('Dept', Department);