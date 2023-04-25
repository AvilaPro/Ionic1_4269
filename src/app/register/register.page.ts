import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  nombre: string = '';
  correo: string = '';
  fecha: string = '';
  p1 : boolean = false;
  p2 : boolean = false;
  p3 : boolean = false;
  estado: string = '';
  ciudad: string = '';



  constructor() { }

  ngOnInit() {
  }

  registrar(){
    console.log(this.p1, this.p2, this.p3);
    let preferencias = [];
    preferencias[0] = this.p1? 'expresso' : '';
    preferencias[1] = this.p2? 'latte' : '';
    preferencias[2] = this.p3? 'mocaccino' : '';
    console.log(this.nombre + ' ' + this.correo + ' ' + this.fecha + ' ' + preferencias +' ' + this.estado + ' ' + this.ciudad);
  }

}
