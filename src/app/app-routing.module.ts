import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisarRemediosComponent } from './pesquisar-remedios/pesquisar-remedios.component';
import { SalvarRemediosComponent } from './salvar-remedios/salvar-remedios.component';

const routes: Routes = [
  { path: '', redirectTo: '/pesquisarRemedios', pathMatch: 'full' },
  { path: 'pesquisarRemedios', component: PesquisarRemediosComponent },
  { path: 'salvarRemedios', component: SalvarRemediosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule {}
