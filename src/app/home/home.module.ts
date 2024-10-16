
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouting   } from './home.routing';
import { HomeComponent } from './home.component';


@NgModule({
	imports: [ 
		HomeRouting,
		CommonModule
	],
	bootstrap: [ HomeComponent ],
	declarations: [ HomeComponent ]
})
export class HomeModule {
}