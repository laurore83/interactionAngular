import { Component } from '@angular/core';
import kitten from '../models/kitten-models';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  newKittenList: kitten[] = [];

  onReceiveNewKitten(event: kitten[]): void {
    this.newKittenList.push(...event);
    console.log(this.newKittenList);
  }
}
