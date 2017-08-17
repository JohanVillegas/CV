import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "./services/firebase.service";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contacts: FirebaseListObservable<any[]>;
  id:string;
  estado:string;
  
  constructor(private fbService:FirebaseService) {}

  ngOnInit(){
   ///this.fbService.obtenerContacto().subscribe((contacts) => {this.contacts = contacts});
   this.contacts = this.fbService.obtenerContacto();
  }

  mostrarInformacion(id, estado){
    this.id= id;
    this.estado= estado;
  }
}
