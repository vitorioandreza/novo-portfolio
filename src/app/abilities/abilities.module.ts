
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbilitiesRouting   } from './abilities.routing';
import { AbilitiesComponent } from './abilities.component';


@NgModule({
	imports: [ 
		CommonModule,
		AbilitiesRouting
	],
	bootstrap: [ AbilitiesComponent ],
	declarations: [ AbilitiesComponent ]
})
export class AbilitiesModule {
}