import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '@app/directives/directives.module';

import { AboutRouting   } from './about.routing';
import { AboutComponent } from './about.component';


@NgModule({
	imports: [ 
		AboutRouting,
		CommonModule,
		DirectivesModule
	],
	bootstrap: [ AboutComponent ],
	declarations: [ AboutComponent ]
})
export class AboutModule {
}