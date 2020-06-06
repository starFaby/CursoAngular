import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { DirectivangifComponent } from './directivangif/directivangif.component';
import { DirectivangforComponent } from './directivangfor/directivangfor.component';
import { DirectivangifforComponent } from './directivangiffor/directivangiffor.component';
import { ProductoslistComponent } from './productoslist/productoslist.component';
import { ProductosService } from './services/productos.service';
import { PersonaComponent } from './persona/persona.component';
import { ImagenComponent } from './imagen/imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    StartComponent,
    HeaderComponent,
    DirectivangifComponent,
    DirectivangforComponent,
    DirectivangifforComponent,
    ProductoslistComponent,
    PersonaComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
