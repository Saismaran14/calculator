import { Component } from '@angular/core';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone component
  imports: [AddComponent], // ✅ Import AddComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
}
