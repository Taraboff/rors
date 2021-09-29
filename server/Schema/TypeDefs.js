const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Contact {
        id: ID
        fio: String
        role: String
        phone: String
        phone10digit: String
        dept: String
        organization: String
    }

    #Queries

    type Query {
        getContacts: [Contact],
        getContact(id: ID): Contact
    }

    # Mutations

    type Mutation {
        createContact(fio: String!,
                role: String!,
                phone: String!,
                phone10digit: String,
        ): Contact!,
        deleteContact(id: ID): String,
        updateContact(id: ID, fio: String!,
                role: String!,
                phone: String!,
                phone10digit: String,
        ): Contact!,
    }
`;

module.exports = { typeDefs };