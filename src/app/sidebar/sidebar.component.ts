import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',             icon:'nc-icon nc-settings-gear-65',  class: '' },
   // { path: '/icons',         title: 'Icons',                 icon:'nc-diamond',                   class: '' },
    { path: '/rotinacarga',   title: 'Rotina Carga de dados', icon:'nc-refresh-69',                class: '' },
   // { path: '/notifications', title: 'Notifications',         icon:'nc-bell-55',                   class: '' },
   // { path: '/user',          title: 'User Profile',          icon:'nc-single-02',                 class: '' },
    { path: '/listararquivos',title: 'Listar Arquivos',       icon:'nc-tile-56',                   class: '' }
  //  { path: '/typography',    title: 'Typography',            icon:'nc-caps-small',                class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
