import { NgModule         } from '@angular/core';
import { CommonModule     } from '@angular/common';
import { DirectivesModule } from '@app/directives/directives.module';

import { ProjectsRouting   } from './projects.routing';
import { ProjectsComponent } from './projects.component';


@NgModule({
	imports: [ 
		CommonModule,
		ProjectsRouting,
		DirectivesModule
	],
	bootstrap: [ ProjectsComponent ],
	declarations: [ ProjectsComponent ]
})
export class ProjectsModule {
}