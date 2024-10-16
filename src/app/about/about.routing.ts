
import { Routes         } from '@angular/router';
import { RouterModule   } from '@angular/router';
import { AboutComponent } from './about.component';


const routes: Routes = [
	{ path: '', component: AboutComponent }
];
export const AboutRouting = RouterModule.forChild(routes);