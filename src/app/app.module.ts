import { NgModule      			 } from '@angular/core';
import { HttpClientModule 		 } from '@angular/common/http';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouting   } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		AppRouting,
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	bootstrap: [ AppComponent ],
	declarations: [ AppComponent ]
})
export class AppModule { 
}
