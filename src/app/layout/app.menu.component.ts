import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    model2: any[] = [];
    model3: any[] = [];
    modelAll: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Bienvenida', icon: 'pi pi-fw pi-home', routerLink: ['/landing'] }
                ]
            }                  
        ];

        this.model2 = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },                    
            {
                label: 'Acciones',
                items: [                    
                    { label: 'Compra de Paquetes', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/pages/empty'] },
                    { label: 'Agenda tu Clase', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/empty'] },
                    { label: 'Mis Clases', icon: 'pi pi-fw pi-list', routerLink: ['/pages/empty'] },
                    { label: 'Historial Compras', icon: 'pi pi-fw pi-book', routerLink: ['/pages/empty'] }
                ]
            }            
        ];

        this.model3 = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },                    
            {
                label: 'Admin',
                items: [                    
                    { label: 'Clases', icon: 'pi pi-fw pi-book', routerLink: ['/pages/empty'] },
                    { label: 'Confirmación de Pagos', icon: 'pi pi-fw pi-money-bill', routerLink: ['/pages/empty'] },                    
                ]
            }            
        ];

        this.modelAll = [
            {
                label: 'Home',
                items: [
                    { label: 'Bienvenida', icon: 'pi pi-fw pi-home', routerLink: ['/landing'] }
                ]
            },
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },                    
            {
                label: 'Acciones',
                items: [                    
                    { label: 'Compra de Paquetes', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/pages/crud'] },
                    { label: 'Agenda tu Clase', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/empty'] },
                    { label: 'Mis Clases', icon: 'pi pi-fw pi-list', routerLink: ['/pages/empty'] },
                    { label: 'Historial Compras', icon: 'pi pi-fw pi-book', routerLink: ['/pages/empty'] }
                ]
            },                    
            {
                label: 'Admin',
                items: [                    
                    { label: 'Clases', icon: 'pi pi-fw pi-book', routerLink: ['/pages/empty'] },
                    { label: 'Instructor', icon: 'pi pi-fw pi-prime', routerLink: ['/pages/instructor'] },
                    { label: 'Confirmación de Pagos', icon: 'pi pi-fw pi-money-bill', routerLink: ['/pages/empty'] },                    
                ]
            }
        ];
    }
}
