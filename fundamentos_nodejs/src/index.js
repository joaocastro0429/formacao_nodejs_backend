const express = require('express')
const app = express()
 

/** 
 * tipos de parametros
 * Routes Params => identificar um recurso editar/deletar/buscar 
 * Query params => Paginação / filtro
 * Body params => Os objetos inscrição/alteração (JSON)
*/
app.use(express.json())

app.get("/courses", (request, response) => {
    const query = request.query
    console.log(query)
    return response.json(["curso 1", "curso 2", "curso 3", "curso 4"])
})
app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body)
    return response.json(["curso 1", "curso 2", "curso 3", "curso 4"])
})
app.put("/courses/:id", (request, response) => {
    const {id}= request.params
    console.log({'id':id})
    return response.json(["curso 6", "curso 2", "curso 3", "curso 4"])
})
app.patch("/courses/:id", (request, response) => {
    return response.json(["curso 5", "curso 2", "curso 3", "curso 4"])
})
app.delete("/courses/:id", (request, response) => {
    return response.json(["curso 1", "curso 2", "curso 3", "curso 4"])
}) 

app.listen(3333)