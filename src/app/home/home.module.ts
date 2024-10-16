import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '@app/directives/directives.module';

import { HomeRouting   } from './home.routing';
import { HomeComponent } from './home.component';


@NgModule({
	imports: [ 
		HomeRouting,
		CommonModule,
		DirectivesModule
	],
	bootstrap: [ HomeComponent ],
	declarations: [ HomeComponent ]
})
export class HomeModule {
}