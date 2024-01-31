# GraphQL_DAW2_2024

En el ejemplo 'EjemploGraphQL' conviven rutas API Rest y GraphQL.
'GraphQLSolo' contiene el servicio del ejemplo solo con GraphQL sin API Rest; además incluye un ejemplo de uso desde el cliente.

Ejemplo de consultas GraphQL para los ejemplos 'EjemploGraphQL' y 'GraphQLSolo':

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
```

El ejemplo 'GraphQLyMongoose', extrae los datos de Mongo a través de Mongoose. El ejemplo está basado en el que se hizo para API Rest por lo que en la app conviven los dos: API Rest y GraphQL. La base de datos de ejemplo está en la carpeta 'dump'.
Ejemplo de consultas GraphQL para este servicio:

```GraphQL
query {
 personas {
    id
    nombre
    edad
 }
}


query {
 persona(pid: 2) {
    id
    nombre
    edad
 }
}


mutation {
 agregarPersona(id:1980, nombre: "Mig-31", edad: 47) {
    id
    nombre
    edad
 }
}


mutation {
 eliminarPersona(id:1980)
}


mutation {
 actualizarPersona(id: 1980, nombre: "Nuevowwerr Nombreerl", edad: 243) 
}


query {
 comentarios {
    idU
    comment
 }
}


query {
 comentarios {
    idU
    comment
    likes
    timestamp
 }
}


query {
 comentariosAsignados {
    _id
    comentarios {
        comment
        likes
    }
 }
}


query {
 comentariosAsignadosA(id:2) {
    _id
    comentarios {
        comment
        likes
    }
 }
}
```

