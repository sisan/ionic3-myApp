import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
	public meu_nome:string = "Denis Sisan";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public SomaDoisNumeros():void {
  	alert("Funcionou!!!!!");

  }


  ionViewDidLoad() {
    //this.SomaDoisNumeros();
    //console.log('ionViewDidLoad FeedPage');
  }

}
