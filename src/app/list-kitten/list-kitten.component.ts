import { Component, EventEmitter, Input, Output } from '@angular/core';
import kitten from '../models/kitten-models';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  @Input() newKittenList: kitten[] = [];

  onReceiveNewKitten(event: kitten[]): void {
    this.newKittenList.push(...event);
    console.log(this.newKittenList);
  }

  @Input() newAdoptedKittenList: kitten[] = [];

  onReceiveAdoptedKitten(event: kitten[]): void {
    this.newAdoptedKittenList.push(...event);
    console.log(this.newAdoptedKittenList);
  }
}

//   @Output()
//   sendMyKitten: EventEmitter<kitten[]> = new EventEmitter<kitten[]>();
//   adoptkitten(selectedKitten: kitten): void {
//     // Vérifiez si un chat a été sélectionné
//     if (selectedKitten) {
//       // Émettez un événement pour envoyer le chat adopté vers le composant parent
//       this.sendMyKitten.emit([selectedKitten]);
//     } else {
//       console.error('No kitten was selected for adoption.');
//     }
//   }
// }
