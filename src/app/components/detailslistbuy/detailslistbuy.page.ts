import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { AlertController, NumericValueAccessor } from '@ionic/angular';
import { zip } from 'rxjs';



@Component({
  selector: 'app-detailslistbuy',
  templateUrl: './detailslistbuy.page.html',
  styleUrls: ['./detailslistbuy.page.scss'],
})
export class DetailslistbuyPage implements OnInit {

  p1 = { cantidad: 2, nombre: "Leche Avena" };
  p2 = { cantidad: 3, nombre: "Pollo" };
  p3 = { cantidad: 3, nombre: "Polla del 9" };
  p4 = { cantidad: 4, nombre: "Clara de huevos de 1 kg 1231km23op12jo3jp1o2j3po1j2p3jp12j3opjp1o23" };

  private listProduct = new Array<Product>();
  private aux: string;
  constructor(public alertController: AlertController) {
    this.listProduct.push(this.p1, this.p2, this.p3, this.p4);


  }

  ngOnInit() {
  }

  async numProduct(nameProduct: string) {
    const alert = await this.alertController.create({
      header: 'Modificar',
      //subHeader: '',
      message: 'Cambiar cantidad del producto',
      //buttons: ['CANCEL', 'OK'],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            var newCant = data[0];
            console.log(newCant);
            console.log(nameProduct);

            var product = this.listProduct.find(x => x.nombre == nameProduct);
            product.cantidad = newCant;
            console.log(product);
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Nueva cantidad',
        }
      ],
    });

    await alert.present();
  }

  async nameProduct(nameProduct: string) {
    const alert = await this.alertController.create({
      header: 'Modificar',
      //subHeader: '',
      message: 'Cambiar cantidad del producto',
      //buttons: ['CANCEL', 'OK'],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            var newCant = data[0];
            var product = this.listProduct.find(x => x.nombre == nameProduct);
            product.nombre = newCant;
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Nueva cantidad',
        }
      ],
    });

    await alert.present();
  }

  async eliminar(nameProduct: string) {
    var product = this.listProduct.find(x => x.nombre == nameProduct);
    var filter = this.listProduct.filter(x => x.nombre !== product.nombre)
    this.listProduct = filter;
  }
}
