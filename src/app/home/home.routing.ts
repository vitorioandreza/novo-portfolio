
import { Routes        } from '@angular/router';
import { RouterModule  } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
	{ path: '', component: HomeComponent }
];
export const HomeRouting = RouterModule.forChild(routes);