import { Injectable } from '@angular/core';

import { Firestore, collectionData, collection, DocumentData, addDoc, CollectionReference, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Post { text: string; }

@Injectable({
  providedIn: 'root'
})
export class FbOpsService {
  items$: Observable<DocumentData[]>;
  collectionInstance: CollectionReference<DocumentData>;
  constructor(firestore: Firestore) {
    this.collectionInstance = collection(firestore, 'posts');
    this.items$ = collectionData(this.collectionInstance);
  }

  addPost(post: Post): Promise<any> {
    return addDoc(this.collectionInstance, { ...post, timestamp: serverTimestamp()});
  }
}
