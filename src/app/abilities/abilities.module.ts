import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '@app/directives/directives.module';

import { AbilitiesRouting   } from './abilities.routing';
import { AbilitiesComponent } from './abilities.component';


@NgModule({
	imports: [ 
		CommonModule,
		AbilitiesRouting,
		DirectivesModule
	],
	bootstrap: [ AbilitiesComponent ],
	declarations: [ AbilitiesComponent ]
})
export class AbilitiesModule {
}