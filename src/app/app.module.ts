import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/template/menu/menu.component';
import { ListarComponent } from './component/Curso/modules/listar/listar.component';
import { EditarComponent } from './component/Curso/modules/editar/editar.component';
import { AgregarComponent } from './component/Curso/modules/agregar/agregar.component';
import { CursoService } from './component/Curso/service/curso.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarComponent,
    EditarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
