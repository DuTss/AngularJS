import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Message {
  text: string;
  roomId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;

  constructor() {
    // Initialisation de la connexion socket avec le serveur Express
    this.socket = io('http://localhost:3001');
  }

  public sendMessage(message: string, roomId: string): void {
    // Emission de l'événement 'message' vers le serveur
    this.socket.emit('message', {
      roomId,
      text: message
    });
  }

  public receiveMessages(roomId: string): Observable<Message[]> {
    // Ecoute de l'événement 'message' émis par le serveur
    return new Observable<Message[]>(observer => {
      const messages: Message[] = [];
      this.socket.on('message', (data: Message) => {
        if (data.roomId === roomId) {
          messages.push(data);
          observer.next(messages);
        }
      });
    }).pipe(
      map((messages: Message[]) => {
        return messages;
      })
    );
  }
}
