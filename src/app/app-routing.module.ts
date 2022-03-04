import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListanoticiasComponent } from './components/listanoticias/listanoticias.component';
import { CrearnoticiasComponent } from './components/crearnoticias/crearnoticias.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'noticias', pathMatch: 'full'
  },
  {
    path: 'noticias', component: ListanoticiasComponent
  },
  {
    path: 'crearnoticia', component: CrearnoticiasComponent
  },
  {
    path: 'editarnoticia/:id', component: CrearnoticiasComponent
  },
  {
    path: '**', redirectTo: 'noticias', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
