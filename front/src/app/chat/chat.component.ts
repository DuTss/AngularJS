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
      console.log(this.messages);
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      console.log(this.currentUser);
    });
  }

  sendMessage(): void {
    console.log(this.message);
    this.ChatService.sendMessage(this.message, this.roomId);
    this.lastMessageSent = this.message;

  // Inverser l'ordre des éléments de la liste des messages
  this.messages.reverse();
    this.message = '';
  }
}