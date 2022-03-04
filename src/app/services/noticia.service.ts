import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private firestore: AngularFirestore) { }

  sagregarnoticia(noticia: any): Promise<any>
  {
    return this.firestore.collection('Noticia').add(noticia);
  }
  scapturarnoticia(): Observable<any>
  {
    return this.firestore.collection('Noticia', ref => ref.orderBy('fechacreacion', 'desc')).snapshotChanges();
  }
  seliminarnoticia(id:string): Promise<any> 
  {
    return this.firestore.collection('Noticia').doc(id).delete();
  }
  seditarnoticia(id: string): Observable<any> 
  {
    return this.firestore.collection('Noticia').doc(id).snapshotChanges();
  }
  sactualizarnoticia(id: string, data:any): Promise<any>
  {
    return this.firestore.collection('Noticia').doc(id).update(data);
  }

}
