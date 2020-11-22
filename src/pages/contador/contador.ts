import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';



@IonicPage({})
@Component({
  selector: 'page-contador',
  templateUrl: 'contador.html',
})
export class ContadorPage {
  id: number;
  cont: number = 1;
  soma: number = 0;
  soma1: number = 0;
  soma2: number = 0;
  somaTotal2: number = 0;
  total: number = 0;
  sub: number = 0;
  items: Array<any> = [];
  contador: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public cart: CartProvider) {
  }

  ionViewDidLoad() {

  }

  removeItem(index) {
    this.cart.removeItem(index);
  }

  calculateTotal() {
    this.cart.calculateTotal();
  }

  contarMais(id) {

    if (id >= 0) {


      this.cart.items.forEach(item => {

        if (id == item.id) {

          item.cont++;

          item.total = (Number(item.valor)) * (Number(item.cont));

          this.soma1 = item.total;

          console.log("soma 01 " + this.soma1);

        } else {

          item.total = (Number(item.valor)) * (Number(item.cont));
          this.soma2 = item.total;
          console.log("soma 02 " + this.soma2);

        }

        this.somaTotal2 = Number(this.soma1) + Number(this.soma2);
        console.log("soma 02 " + this.somaTotal2);



      })

    }


  }




  contarMenos(id) {

    if (id >= 0) {


      this.cart.items.forEach(item => {

        if (id == item.id) {

          item.cont--;

          item.total = (Number(item.valor)) * (Number(item.cont));

          this.soma1 = item.total;

          console.log("soma 01 " + this.soma1);

        } else {

          item.total = (Number(item.valor)) * (Number(item.cont));
          this.soma2 = item.total;
          console.log("soma 02 " + this.soma2);

        }

        this.somaTotal2 = Number(this.soma2) - Number(this.soma1);
        console.log("soma 02 " + this.somaTotal2);



      })


    }

  }





}
