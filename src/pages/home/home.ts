import { Component } from '@angular/core';
//import {  Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
//import { Observable } from 'rxjs';

//@Injectable() //permet d'injecter notre element créer dans la firebase

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  //creation de l'objet articles vide
  articlesRef : AngularFireList<any>;  //liste de Firebase
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: AngularFireDatabase, // creation d'un objet db 
    ) {
      /*  on lie articlesRef a notre base de donnée sur Firabase
          en lui donnant le nom  */
      this.articlesRef = this.db.list('/articles')
    
  }


}
