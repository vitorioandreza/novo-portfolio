
import { Routes        } from '@angular/router';
import { RouterModule  } from '@angular/router';
import { AbilitiesComponent } from './abilities.component';


const routes: Routes = [
	{ path: '', component: AbilitiesComponent }
];
export const AbilitiesRouting = RouterModule.forChild(routes);