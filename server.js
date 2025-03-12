// Importar Firebase y inicializar
const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

// Inicializar Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<your-database-url>.firebaseio.com'
});

const db = admin.firestore();
const app = express();
app.use(bodyParser.json());

// Endpoint para recibir datos del formulario
app.post('/rsvp', async (req, res) => {
    const { nombre, invitados, comentarios } = req.body;
    const data = { nombre, invitados, comentarios };

    try {
        await db.collection('asistencias').add(data);
        res.status(200).send('Asistencia confirmada correctamente.');
    } catch (error) {
        res.status(500).send('Error al guardar la asistencia: ' + error);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
