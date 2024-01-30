# GraphQL_DAW2_2024

En el ejemplo 'EjemploGraphQL' conviven rutas API Rest y GraphQL.
GraphQLSolo contiene el servicio del ejemplo solo con GraphQL sin API Rest.

Ejemplo de consultas GraphQL:

```GraphQL

query consultaporID{
 persona(id: 2) {
    id
    nombre
    edad
 }
}

query consultaTodosEdad {
   personas {
      edad
   }
}

query consultaTodosTodo {
   personas {
      id
      nombre
      edad
   }
}

query consultaTodos {
   personas {
      nombre
      edad
   }
}

mutation agregar {
 agregarPersona(id:5, nombre: "DAW2", edad: 25) {
    id
    nombre
    edad
 }
}

mutation borrar {
 eliminarPersona(id:1)
}

mutation actualizar {
   actualizarPersona(id: 3, nombre: "Nuevo Nombre", edad: 26) {
    id
    nombre
    edad
 }
}

