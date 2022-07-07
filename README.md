# notes-api-backend

Url: https://obscure-thicket-82350.herokuapp.com/

## Descripción

Backend hospedado en Heroku que utilizo en <a href="https://github.com/Yato03/notes-frontend" target="_blank">este proyecto de notas </a> hecho en React. Con esta app puedes anotar tus quehaceres y este backend se encarga de la parte de guardar las notas gracias a un API rest con los siguientes **endpoints**.

## Endpoints

### Obtener todas las notas

```GET /api/notes```

### Obtener una nota por id

```GET /api/notes/[id]```

### Borrar una nota por id

```DELETE /api/notes/[id]```

### Crear nota

```POST /api/notes```

Example body: 
```
{
  "important": true,
  "content": "contenido"
}
```
important -> importancia de la nota

content -> contenido de la nota

### Actualizar nota por id

```PUT /api/notes/[id]```

Example body:
``` 
{
  "important": true,
  "content": "VAMOOOO"
}
```
important -> importancia de la nota

content -> contenido de la nota

