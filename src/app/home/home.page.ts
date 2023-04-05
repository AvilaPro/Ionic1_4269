import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor() {}
  bebidas = [
    {
      nombre: 'Bebidas Espresso',
      descripcion: 'Bebidas con los mejores granos de café 100% arábica, cuidadosamente seleccionados y tostados al más puro estilo Starbucks®.',
      precio: 3
    },
    {
      nombre: 'Chocolates',
      descripcion: 'Descubre nuestros chocolates y sus mejores combinaciones, calientes o fríos... ¡Tú decides!',
      precio: 4
    },
    {
      nombre: 'Frapuccino con base de cafe',
      descripcion: 'Bebidas refrescantes de hielo batido, con base de café con diferentes variedades de sabores, mezclados con leche o bebidas vegetales',
      precio: 5
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
  share(){

  }
  buy(){

  }
}
