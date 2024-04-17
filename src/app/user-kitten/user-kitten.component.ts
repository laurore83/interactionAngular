import { Component, Input } from '@angular/core';
import { kitten } from '../models/kitten-models';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css',
})
export class UserKittenComponent {
  @Input()
  adoptedKitten!: kitten[];
}
