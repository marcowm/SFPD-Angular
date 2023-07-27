import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { ListarArquivosComponent } from '../../pages/listar-arquivos/listar-arquivos.component';
import { RotinaCargaComponent } from '../../pages/rotina-carga-dados/rotina-carga-dados.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'listararquivos', component: ListarArquivosComponent },
   // { path: 'typography',     component: TypographyComponent },
   //{ path: 'icons',          component: IconsComponent },
    { path: 'rotinacarga',    component: RotinaCargaComponent },
   // { path: 'notifications',  component: NotificationsComponent },
   // { path: 'upgrade',        component: UpgradeComponent }
];
