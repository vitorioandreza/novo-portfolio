
import { Routes        } from '@angular/router';
import { RouterModule  } from '@angular/router';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
	{ path: '', component: ProjectsComponent }
];
export const ProjectsRouting = RouterModule.forChild(routes);