const express = require('express');
const app = express();
// Array que almacenar usuarios y contraseñas
const usuarios = [
    { usuario: 'admin', contraseña: 'wmia123' },
    { usuario: 'gestionambiental', contraseña: 'wmia678' }
  ];
  

app.get('/', (req, res) => {
    var user = req.query.user
    var password = req.query.password
    var usuarioEncontrado = autenticarUsuario(user,password)
    if (usuarioEncontrado) {
        res.send(true)
    } else {
        res.send(false)
    }
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

// Función para autenticar usuarios
function autenticarUsuario(usuario, contraseña) {
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);
  
    if (usuarioEncontrado) {
      return true; // Autenticación exitosa
    } else {
      return false; // Autenticación fallida
    }
  }