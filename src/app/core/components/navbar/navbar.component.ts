import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarItem } from '@app/core/models/UIModels/NavbarItem';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive],
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
    {
      LocaleLink: "SETTINGS",
      IconName: "gear",
      routerLink: "settings",
    },
  ]

  leftMobileNavItems: NavbarItem[] = [
    {
      LocaleLink: "STATISTICS",
      IconName: "graph-up",
      routerLink: "statistics",
    }
  ]
  centerMobileNavItem: NavbarItem = 
  {
    LocaleLink: "DIARY",
    IconName: "journal-check",
    routerLink: "diary",
  };
  rightMobileNavItems: NavbarItem[] = [
    {
      LocaleLink: "SETTINGS",
      IconName: "gear",
      routerLink: "settings",
    }
  ]


}
