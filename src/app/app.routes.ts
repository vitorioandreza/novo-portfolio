import { Routes            } from '@angular/router';
import { RouterModule      } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
	{ path: 'sobre-mim',   loadChildren: () => import('@app/about/about.module').then(m => m.AboutModule), 			   data: {animation: 'about-me'} },
	{ path: 'habilidades', loadChildren: () => import('@app/abilities/abilities.module').then(m => m.AbilitiesModule), data: {animation: 'abilities'} },
	{ path: 'projetos',    loadChildren: () => import('@app/projects/projects.module').then(m => m.ProjectsModule),    data: {animation: 'projects'} },
	{ path: 'inicio',		   loadChildren: () => import('@app/home/home.module').then(m => m.HomeModule), 			   data: {animation: 'home'} },
	
	{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
	{ path: '**', loadChildren: () => import('@app/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule), data: {animation: 'not-found'} }
];
export const AppRouting = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, anchorScrolling: 'enabled' });
