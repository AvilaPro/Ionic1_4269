import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    'https://i.blogs.es/2df4c2/midjourney-arte/1366_2000.jpg',
    'https://i.blogs.es/ff5e27/foto/450_1000.webp',
    'https://cdn.leonardo.ai/users/a34ad5f6-32c0-4915-84c8-90e804a8e28b/generations/7256b92a-4045-43bf-8b82-3023f808515b/variations/Default_centered_isometric_vector_tshirt_art_ready_to_print_h_0_7256b92a-4045-43bf-8b82-3023f808515b_1.jpg',
    'https://media.es.wired.com/photos/6425d813d1a2eac0c367ca69/3:2/pass/midjourney%2520v5%2520prohibe%2520creacion%2520imagenes%2520ia.jpg',
    'https://cdn.leonardo.ai/users/1253d5cd-a22f-4884-a542-ff7a6c3c4c76/generations/9559a098-b084-4511-b16b-f4aeb1c9e89a/variations/Default_time_bomb_centered_isometric_vector_tshirt_art_ready_t_2_9559a098-b084-4511-b16b-f4aeb1c9e89a_1.jpg',
    'https://cdn.leonardo.ai/users/d501dad0-e529-4c0e-a94d-9030bb154328/generations/9d594e8c-556b-4cb7-9e1c-9a185f7b93df/Leonardo_Diffusion_A_detailed_illustration_a_print_of_smiling_1.jpg'
  ]

}
