import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactMock } from '../contact-Mock';

@Component({
  selector: 'app-raiz',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  contactList: Contact[];
  constructor() { }

  ngOnInit(): void {
   
  }

  onList(): void{
    if(this.contactList){
      this.contactList=null;
    }else{
      this.contactList = ContactMock;
    }
  }

  

}
