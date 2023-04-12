import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private socket: any;
  message: string ='';
  roomId: string ='';

  constructor() {
    // Initialisation de la connexion socket avec le serveur Express
    this.socket = io('http://localhost:3001');
  }

  ngOnInit(): void {
    // Ecoute de l'événement 'message' émis par le serveur
    this.socket.on('message', (data: any) => {
      console.log(`Message reçu dans la salle ${data.roomId} : ${data.text}`);
    });
  }

  sendMessage() {
    // Emission de l'événement 'message' vers le serveur
    this.socket.emit('message', {
      roomId: this.roomId,
      text: this.message
    });
  }
}
