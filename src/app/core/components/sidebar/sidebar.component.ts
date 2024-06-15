import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarItem } from '@app/core/models/UIModels/SidebarItem';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, TranslateModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarItems: SidebarItem[] = [
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
