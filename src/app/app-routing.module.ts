import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './component/Curso/modules/agregar/agregar.component';
import { EditarComponent } from './component/Curso/modules/editar/editar.component';
import { ListarComponent } from './component/Curso/modules/listar/listar.component';


const routes: Routes = [
{path : 'listar' , component : ListarComponent},
{path : 'editcurso/:id' , component : EditarComponent},
{path : "curso/add" , component : AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
