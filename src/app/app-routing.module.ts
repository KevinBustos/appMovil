import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'clima',
    redirectTo: 'clima',
    pathMatch: 'full'
  },
  {
    path: 'conversor',
    redirectTo: 'conversor',
    pathMatch: 'full'
  },
  {
    path: 'lista-digimon',
    redirectTo: 'lista-digimon',
    pathMatch: 'full'
  },
  {
    path: 'about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
 
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'conversor',
    loadChildren: () => import('./conversor/conversor.module').then( m => m.ConversorPageModule)
  },
  {
    path: 'lista-digimon',
    loadChildren: () => import('./lista-digimon/lista-digimon.module').then( m => m.ListaDigimonPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'kevin',
    loadChildren: () => import('./kevin/kevin.module').then( m => m.KevinPageModule)
  },
  {
    path: 'javier',
    loadChildren: () => import('./javier/javier.module').then( m => m.JavierPageModule)
  },
  {
    path: 'nicolas',
    loadChildren: () => import('./nicolas/nicolas.module').then( m => m.NicolasPageModule)
  },
  {
    path: 'david',
    loadChildren: () => import('./david/david.module').then( m => m.DavidPageModule)
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
