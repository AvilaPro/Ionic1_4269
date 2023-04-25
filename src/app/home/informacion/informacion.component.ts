import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-informacion',
  templateUrl: 'informacion.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InformacionComponent {
  name: any;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.name);
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  verName(){
    console.log(this.name);
  }
}
