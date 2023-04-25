import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { ToastController, AlertController, ActionSheetController, ModalController } from "@ionic/angular";

import { InformacionComponent } from "./informacion/informacion.component";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  constructor(private toastController: ToastController, private alertController: AlertController, private actionSheetCtrl: ActionSheetController, private modalCtrl:ModalController, private router: Router) {}
  precioDolarBCV = 24.15;
  formaDePago = '';
  redSocial = '';
  message = 'Para probar el modal';

  bebidas = [
    {
      nombre: 'Bebidas Espresso',
      descripcion: 'Bebidas con los mejores granos de café 100% arábica, cuidadosamente seleccionados y tostados al más puro estilo Starbucks®.',
      precio: 3,
      stock: 10
    },
    {
      nombre: 'Chocolates',
      descripcion: 'Descubre nuestros chocolates y sus mejores combinaciones, calientes o fríos... ¡Tú decides!',
      precio: 4,
      stock: 5
    },
    {
      nombre: 'Frapuccino con base de cafe',
      descripcion: 'Bebidas refrescantes de hielo batido, con base de café con diferentes variedades de sabores, mezclados con leche o bebidas vegetales',
      precio: 5,
      stock: 2
    }
  ];
  servicios = [
    {
      imgUrl: 'https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_mobile_503x420/public/2021-01/Starbucks-Delivers-Hero-C01-RESIZED.jpg.webp?itok=fsMvZxtL',
      title: 'Disfruta tu experiencia Starbucks® donde quieras',
      description: '¿Eres más de café, de smoothie, de latte o de Frappuccino®? No esperes más y pide Starbucks® a domicilio o para llevar.',
      redireccion: ''
    },
    {
      imgUrl: 'https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_mobile_503x287/public/2022-03/carta_.png.webp?itok=xD_UgpWk',
      title: 'Carta',
      description: 'Bebidas deliciosas y alimentos de gran sabor elaborados con ingredientes sencillos pero de gran calidad.',
      redireccion: ''
    },
    {
      imgUrl: 'https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_mobile_503x287/public/2022-03/tiendas%202.png.webp?itok=No8U6PjQ',
      title: 'Tiendas Starbucks',
      description: 'Encuentra tu tienda Starbucks® más cercana, ¡te esperamos!',
      redireccion: ''
    },
    {
      imgUrl: 'https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_mobile_503x287/public/2021-01/Starbucks-Delivers-Homepage-Card-C06-RESIZED.jpg.webp?itok=XX2ths1C',
      title: 'Cómo preparar café Starbucks',
      description: 'Descubre los distintos métodos de elaboración para preparar tu café Starbucks® perfecto en casa.',
      redireccion: ''
    }
  ]
  favorite(){

  }
  async share(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Compartir',
      buttons: [
        {
          text: 'Facebook',
          role: 'selected',
          icon: 'logo-facebook',
          handler: () => {
            this.redSocial = 'facebook'
          }
        },
        {
          text: 'Instagram',
          role: 'selected',
          icon: 'logo-instagram',
          handler: () => {
            this.redSocial = 'instagram'
          }
        },
        {
          text: 'Twitter',
          role: 'selected',
          icon: 'logo-twitter',
          handler: () => {
            this.redSocial = 'twitter'
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
  buy(){

  }
  async dolarToday(position: 'top' | 'middle' | 'bottom'){
    const toast = await this.toastController.create({
      message: `El precio hoy es $ / ${this.precioDolarBCV}  `,
      duration: 2000,
      position: position
    });

    await toast.present();
  }
  async comprarBebida(){
    const alert = await this.alertController.create({
      header: 'Compra',
      subHeader: 'Confirmacion de compra',
      message: 'Por favor indique si desea comprar este producto',
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: (ev) => {
            console.log(ev);
            this.formaDePago = ev;
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        }
      ],
      inputs:[
        {
          type: 'radio',
          name: 'forma',
          placeholder: 'efectivo',
          value: 'efectivo',
          label: 'Efectivo',
          id: '1'
        },
        {
          type: 'radio',
          name: 'forma',
          placeholder: 'debito',
          value: 'debito',
          label: 'Debito',
          id: '2'
        },
        {
          type: 'radio',
          name: 'forma',
          placeholder: 'pago movil',
          value: 'pago movil',
          label: 'Pago movil',
          id: '3'
        }
      ]
    });

    await alert.present();
  }
  async activarModal(){
    const modal = await this.modalCtrl.create({
      component: InformacionComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
  navigate(ruta: string){
    this.router.navigate([ruta]);
  }
}
