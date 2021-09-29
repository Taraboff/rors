const Contact = require('../models/Contact.model');

const resolvers = {
    Query: {
        getContacts: async () => {
            return await Contact.find()
        },
        getContact: async (parent, { id } ) => {
            return await Contact.findById(id);
        }
    },
    Mutation: {
        createContact: async (parent, args) => {
            const { fio, role, phone } = args;
            const contact = new Contact({ fio, role, phone });
            await contact.save();
            return contact;
        },
        deleteContact: async (parent, { id }) => {
            await Contact.findByIdAndDelete(id);
            return "Контакт удален";
        },
        updateContact: async (parent, { id, fio, role, phone }) => {
            const contact = await Contact.findByIdAndUpdate(
                id, 
                { fio, role, phone }, 
                { new: true }
            );
            return contact;
        },
    }
};

module.exports = { resolvers };