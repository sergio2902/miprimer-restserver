const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query;
    res.json({
        "msg": "get popo - controlador",
        q,
        nombre,
        apikey
    });
}
const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        "msg": "put popo- controlador",
        id
    });
}
const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        "msg": "post popo- controlador",
        nombre,
        edad
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        "msg": "delete popo- controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}