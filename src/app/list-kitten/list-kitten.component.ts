import { Component, EventEmitter, Input, Output } from '@angular/core';
import { kitten } from '../models/kitten-models';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  newKittenList: kitten[] = [
    {
      name: 'minou',
      race: 'mignon',
      birthday: new Date(),
      img: 'https://i.pinimg.com/564x/b8/a1/29/b8a12931251ca0df8da9d4d65dee8026.jpg',
    },
  ];

  onReceiveNewKitten(event: kitten[]): void {
    this.newKittenList.push(...event);
  }
  showInfo: boolean = false;

  showKittenInfo(kitten: any) {
    this.showInfo = true;
  }

  hideKittenInfo() {
    this.showInfo = false;
  }
  adoptedKitten: kitten[] = [];

  adoptKitten(kitten: kitten): void {
    this.adoptedKitten.push(kitten);
    this.newKittenList.pop();
  }
}
