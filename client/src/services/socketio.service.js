import { io } from "socket.io-client";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    console.log(process.env.SERVER_URL);
    this.socket = io("http://localhost:3000");
  }
}

export default new SocketioService();
