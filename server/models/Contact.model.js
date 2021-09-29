const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    fio: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        reauired: true
    },
    role: String,
    phone10digit: String,
    dept: String,
    organizationID: String

});

const Contact = mongoose.model('rors', ContactSchema);

module.exports = Contact;