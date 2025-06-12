import { Component     } from '@angular/core';
import { ElementRef    } from '@angular/core';
import { ViewChild     } from '@angular/core';
import { HostListener  } from '@angular/core';

import { ViewportScroller } from '@angular/common';
import { AppAnimations    } from './app.animations';

import { Router                 } from '@angular/router';
import { NavigationEnd          } from '@angular/router';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	animations: [ AppAnimations ]
})
export class AppComponent {
	public visible_menu = false;

	constructor (
		private router: Router,
		private element: ElementRef,
		private scroller: ViewportScroller,
		private contexts: ChildrenOutletContexts
	) {}

	public toggle_menu () {
		this.visible_menu = !this.visible_menu;
	}

	public animation () {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'] || 'boot';
    }

    public show_footer () {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['showFooter'] || false;
    }

    public change_color_theme () {
    	return 'gradient-' +  this.animation();
    }
}
