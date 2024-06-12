import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import veterinarioRoutes from './routes/veterinarioRoutes.js';
import pacienteRoutes from './routes/pacienteRoute.js';

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();

/* const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        // Permite solicitudes sin origen (como Postman) durante el desarrollo
        if (!origin) {
            return callback(null, true);
        }
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            // El origen del request está permitido
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Agrega métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Agrega encabezados permitidos
};
 */
app.use(cors());
app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto : ${PORT}`);
});
 