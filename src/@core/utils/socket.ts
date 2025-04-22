import { io, Socket } from 'socket.io-client';

import { SrvToCltEvents } from '../types/stockExchange';
import { CltToSrvEvents } from '../types/stockExchange';

export class SocketIO {
  socketInstance: Socket<SrvToCltEvents, CltToSrvEvents> | null;
  constructor() {
    this.socketInstance = null;
  }

  init(code: string) {
    const token = localStorage.getItem('accessToken');
    this.socketInstance = io(process.env.NEXT_PUBLIC_SOCKET_API_URL + '/' + code, {
      transports: ['polling'],
      forceNew: true,
      path: '/ws',
      // autoConnect: true,
      reconnection: true,
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return this.socketInstance;
  }

  public destroy() {
    this.socketInstance.disconnect();
    this.socketInstance.removeAllListeners();
  }
}
