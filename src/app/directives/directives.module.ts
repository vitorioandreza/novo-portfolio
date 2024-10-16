import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlurDirective    } from './blur.directive';
import { AnimateDirective } from './animate.directive';


@NgModule({
	exports: [
		BlurDirective,
		AnimateDirective
	],
	imports: [ CommonModule ],
	declarations: [
		BlurDirective,
		AnimateDirective
	]
})
export class DirectivesModule {}