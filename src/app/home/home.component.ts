import { Component, OnInit, Renderer2 } from '@angular/core';

import gsap from 'gsap';

@Component({
	selector: 'home-component',
	templateUrl: 'home.component.html',
	styleUrls: [ 'home.component.sass' ]
})
export class HomeComponent implements OnInit {
	private toX: any;
	private toY: any;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {
		gsap.set('.radial-blur', {xPercent: -50, yPercent: -50});

		this.toX = gsap.quickTo('.radial-blur', 'x', { duration: 0.6, ease: 'power3' });
		this.toY = gsap.quickTo('.radial-blur', 'y', { duration: 0.6, ease: 'power3' });

		this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
			this.onMouseMove(event);
		})
	}

	public onMouseMove (event: MouseEvent): void {
		this.toX(event.clientX);
		this.toY(event.clientY);
	}
}
