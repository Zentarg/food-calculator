import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './core/services/data.service';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-calculator';

  constructor(private translate: TranslateService, private dataService: DataService) {
    this.translate.setDefaultLang("da");
    this.translate.use("da");

    this.dataService.sources$.subscribe(v => {
      console.log("sources:", v);
    })
    this.dataService.parameterTypes$.subscribe(v => {
      console.log("parameterTypes:", v);
    })
    this.dataService.parameterGroups$.subscribe(v => {
      console.log("parameterGroups:", v);
    })
    this.dataService.foodTypes$.subscribe(v => {
      console.log("foodTypes:", v);
    })
    this.dataService.foodGroups$.subscribe(v => {
      console.log("foodGroups:", v);
    })
    this.dataService.foodData$.subscribe(v => {
      console.log("foodData:", v);
    })

    this.dataService.foodData$.pipe()
  }
}