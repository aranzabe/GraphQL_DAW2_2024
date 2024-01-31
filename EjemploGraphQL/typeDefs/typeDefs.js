const { gql } = require('graphql-tag');;

const typeDefs = gql`

 type Persona {
    id: ID!
    nombre: String!
    edad: Int!
 }


 type Query {
    personas: [Persona]
    persona(id: ID!): Persona
 }

 type Mutation {
    agregarPersona(id:Int, nombre: String!, edad: Int!): Persona
    eliminarPersona(id: Int!): Boolean
    actualizarPersona(id: Int, nombre: String, edad: Int): Persona
 }
`

module.exports = typeDefs;
