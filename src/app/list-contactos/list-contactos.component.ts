import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';


@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.css']
})
export class ListContactosComponent implements OnInit {

  @Input() paint: Contact[];

  selectedContact: Contact;

  constructor() { }

  ngOnInit(): void {
    this.selectedContact=null;
  }

  onSelect(clicked:Contact):void{
      if(this.paint != null){
        this.selectedContact =clicked;
      }
   
  }
}
