const { v4: uuidv4 } = require('uuid');
const { addPersona, getPersona, removePersonaAt, updatePersonaAt, getPersonas } = require('../database/basededatos.js');
const { Persona } = require('../models/Persona')

const resolvers = {
 Query: {
    personas: () => getPersonas(),
    persona: (_, { id }) => {
      const resp = getPersona(id)
      if (resp!=null){
        return getPersona(id);
      } else {
        throw new Error("No se pudo encontrar la persona.");
      }},
 },
 Mutation: {
    agregarPersona: (_, { id, nombre, edad }) => {
      const persona = new Persona(id, nombre, edad);
      addPersona(persona);
      return persona;
    },
    eliminarPersona: (_, { id }) => {
      const index = getPersonas().findIndex((persona) => persona.id === id);
      if (index !== -1) {
        removePersonaAt(index);
        return true;
      }
      throw new Error("No se pudo encontrar la persona para eliminar.");
    },
    actualizarPersona: (_, { id, nombre, edad }) => {
      const index = getPersonas().findIndex((persona) => persona.id === id);
      if (index !== -1) {
        const personaActualizada = new Persona(id ||getPersonas()[index].id, nombre || getPersonas()[index].nombre, edad || getPersonas()[index].edad);
        updatePersonaAt(index, personaActualizada);
        return personaActualizada;
      }
      throw new Error("No se pudo encontrar la persona para actualizar.");
    },
 },
};

module.exports = resolvers;