import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { ChatService } from '../services/chat.service';

interface Message {
  text: string;
  roomId: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private socket: Socket;
  message: string = '';
  roomId: string = '';
  messages: Message[] = [];
  lastMessageSent: string = '';
  currentUser: any;


  constructor(private ChatService: ChatService) {
    // Initialisation de la connexion socket avec le serveur Express
    this.socket = io('http://localhost:3001');
  }

  ngOnInit(): void {
    this.ChatService.receiveMessages(this.roomId).subscribe((messages: Message[]) => {
      this.messages = messages;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      return messages
    });
  }

  sendMessage(): void {
    this.ChatService.sendMessage(this.message, this.roomId);
    this.lastMessageSent = this.message;
    const newMessage: Message = {
      text: this.lastMessageSent,
      roomId: this.roomId
      // Ajoutez d'autres propriétés ici si nécessaire
    };
    this.messages.unshift(newMessage);
console.log("message  ",this.message);
console.log("messages  ",this.messages);
  // Inverser l'ordre des éléments de la liste des messages
  this.messages.reverse();
    this.message = '';
  }
}
