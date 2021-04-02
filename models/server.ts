import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';



class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';

        
        // Metodos iniciales
        this.middleware();
        this.routes();
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto !!!' + this.port );
        })
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    middleware() {
        // CORS
        this.app.use(cors());
        // lectura del body
        this.app.use(express.json());
        //carpeta publica
    }

}

export default Server;