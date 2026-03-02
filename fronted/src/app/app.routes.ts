import { Routes } from '@angular/router';
import { LoginComponent } from '../components/seguridad/login/login.component';
import { RegistrarComponent } from '../components/seguridad/registrar/registrar.component';
import { HomeComponent } from '../components/Paginas/home/home.component';
import { FootComponent } from '../components/footer/foot/foot.component';
import {EduFinaComponent} from '../components/Paginas/edu-fina/edu-fina.component';
import {ComBancoComponent} from '../components/Paginas/com-banco/com-banco.component';
import {BanSeguComponent} from '../components/Paginas/ban-segu/ban-segu.component';
import {RecursosComponent} from '../components/Paginas/recursos/recursos.component';
import {CursoComponent} from '../components/Paginas/curso/curso.component';

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },{
    path:'registrar', component: RegistrarComponent
  },{
    path:'home', component: HomeComponent
  },{
    path:'footer', component: FootComponent
  },{
    path:'edu-fina', component: EduFinaComponent
  },{
    path:'com-banco', component: ComBancoComponent
  },{
    path:'ban-segu', component: BanSeguComponent
  },{
    path:'recursos', component: RecursosComponent
  },
  {
    path:'', component: HomeComponent
  },{
    path:'curso', component: CursoComponent
  }
];
