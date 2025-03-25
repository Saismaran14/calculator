import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  calculateTotal() {
    this.result = this.num1 + this.num2;
  }
}
