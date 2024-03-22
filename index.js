import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const port = process.env.PORT || 8000;

const io = new Server({ cors: process.env.CORS_ORIGIN });

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
});

io.listen(port);
