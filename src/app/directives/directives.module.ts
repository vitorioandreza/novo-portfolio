import { NgModule         } from '@angular/core';
import { CommonModule     } from '@angular/common';
import { AnimateDirective } from './animate.directive';


@NgModule({
	exports: [ AnimateDirective ],
	imports: [ CommonModule ],
	declarations: [ AnimateDirective ]
})
export class DirectivesModule {}