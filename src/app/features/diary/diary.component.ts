import { Component } from '@angular/core';
import { WaterIntakeComponent } from './components/water-intake/water-intake.component';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [WaterIntakeComponent],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss'
})
export class DiaryComponent {

}
