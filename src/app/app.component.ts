import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DataService } from './core/services/data.service';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'food-calculator';

  constructor(private translate: TranslateService, private dataService: DataService, private router: Router) {
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
  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    })
  }
}