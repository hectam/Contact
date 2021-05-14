import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import {ContactMock} from '../contact-Mock'

@Component({
  selector: 'app-edit-contactos',
  templateUrl: './edit-contactos.component.html',
  styleUrls: ['./edit-contactos.component.css']
})
export class EditContactosComponent implements OnInit {
  @Input() selectedContact: Contact;
  titulo: string[];
  constructor() { }

  ngOnInit(): void {
    this.titulo=[
      "Sr.",
      "Sra.",
      "Otro"
    ];
  }

  eliminarContacto():void {
    
    this.selectedContact.nombre =null;
    this.selectedContact.titulo = null;
    this.selectedContact.correo =null;
    this.selectedContact.numero =null;
    this.selectedContact = null;
  }

}
