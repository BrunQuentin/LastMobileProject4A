import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Article } from '../../models/articles/article-model';

/**
 * Generated class for the AddArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-article',
  templateUrl: 'add-article.html',
})
export class AddArticlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  article : Article = {
    title:"",
    quantity: undefined,
    price: undefined,
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddArticlePage');
  }

}
