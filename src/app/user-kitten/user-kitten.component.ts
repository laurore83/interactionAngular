import { Component, EventEmitter, Input, Output } from '@angular/core';
import kitten from '../models/kitten-models';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css',
})
export class UserKittenComponent {
  @Input()
  adoptedKitten: kitten[] = [];
  @Output()
  adoptKittenEvent: EventEmitter<kitten> = new EventEmitter<kitten>();

  @Output()
  sendAdoptedkitten: EventEmitter<kitten[]> = new EventEmitter<kitten[]>();

  adoptKitten(selectedKitten: kitten): void {
    // Marquer le chaton comme adopté
    selectedKitten.isAdopted = true;
    this.adoptKittenEvent.emit(selectedKitten);
  }
}
