import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'cotacao',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => {
        return m.CotacaoModule;
      }),
  },
  {
    path: 'analise-medica',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:7000/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './Module1',
      }).then((m) => {
        return m.AnaliseMedicaModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
