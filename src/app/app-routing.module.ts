import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { StartComponent } from './start/start.component';
import { DirectivangifComponent } from './directivangif/directivangif.component';
import { DirectivangforComponent } from './directivangfor/directivangfor.component';
import { DirectivangifforComponent } from './directivangiffor/directivangiffor.component';
import { ProductoslistComponent } from './productoslist/productoslist.component';
import { PersonaComponent } from './persona/persona.component';
import { ImagenComponent } from './imagen/imagen.component';


const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'directivaNgIf', component: DirectivangifComponent},
  {path: 'directivaNgFor', component: DirectivangforComponent},
  {path: 'directivaNgIfFor', component: DirectivangifforComponent},
  {path: 'productosList', component: ProductoslistComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'imagen', component: ImagenComponent},
  {path: '', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
