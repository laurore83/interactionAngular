import { Component, EventEmitter, Input, Output } from '@angular/core';
import { kitten } from '../models/kitten-models';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css',
})
export class CreateKittenComponent {
  kitten: kitten = {
    name: '',
    race: '',
    birthday: new Date(),
    img: '',
  };

  @Output()
  sendKittenToParent: EventEmitter<kitten[]> = new EventEmitter<kitten[]>();

  createKitten(): void {
    const newKitten: kitten[] = [{ ...this.kitten }];
    // Emittez un tableau contenant le nouveau chaton
    this.sendKittenToParent.emit(newKitten);
  }
}
