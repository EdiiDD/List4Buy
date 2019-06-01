import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthicationService } from 'src/app/services/authication.service';
import { ListBuy } from '../interfaces/list-buy';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AddListBuyService {
  private listBuyCollection: AngularFirestoreCollection<ListBuy>;

  constructor(
    private angularFireStore: AngularFirestore,
    private authicationService: AuthicationService
  ) {
    this.listBuyCollection = this.angularFireStore.collection<ListBuy>('ListBuy');
  }


  getListsBuy() {
    return this.listBuyCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        })
      })
    )

  }

  addListBuy(listBuy: ListBuy) {
    return this.listBuyCollection.add(listBuy);
  }

  getListBuy(id: string) {
    return this.listBuyCollection.doc<ListBuy>(id).valueChanges();
  }

  updateListBuy(id: string, listBuy: ListBuy) {
    return this.listBuyCollection.doc<ListBuy>(id).update(listBuy);
  }

  deleteListBuy(id: string) {
    return this.listBuyCollection.doc(id).delete();
  }

}
