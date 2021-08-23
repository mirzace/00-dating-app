import { NgForm } from '@angular/forms';
import { MessageService } from './../../_services/message.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/_models/message';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.sass']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm : NgForm;
  @Input() username: string; 
  @Input()messages: Message[] =[];
  messageContent: string;


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageService.sendMessage(this.username, this.messageContent).subscribe(msg => {
      this.messages.push(msg);
      this.messageForm.reset();
    })
  }

}
