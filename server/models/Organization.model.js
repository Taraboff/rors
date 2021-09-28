const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
    name: String,
    fullname: String
});

const Organization = new mongoose.model('organization', OrganizationSchema);

module.exports = Organization;