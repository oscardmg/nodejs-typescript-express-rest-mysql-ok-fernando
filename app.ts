import dotenv from 'dotenv';
import Server from './lib/server';

dotenv.config();

const server = new Server();
server.listen();