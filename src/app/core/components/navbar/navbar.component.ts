import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarItem } from '@app/core/models/UIModels/NavbarItem';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, TranslateModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navbarItems: NavbarItem[] = [
    {
      LocaleLink: "DIARY",
      IconName: "journal-check",
      routerLink: "diary",
    },
    {
      LocaleLink: "STATISTICS",
      IconName: "graph-up",
      routerLink: "statistics",
    },
  ]

}
