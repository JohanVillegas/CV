import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
    contacts: FirebaseListObservable<any[]>;
    constructor(private dba: AngularFireDatabase) {}

    obtenerContacto(){
        this.contacts = this.dba.list('/Contact')  as FirebaseListObservable<any[]>;
        return this.contacts;
    }
}