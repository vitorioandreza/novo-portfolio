import { Component   } from '@angular/core';
import { OnInit      } from '@angular/core';
import { Renderer2   } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { NgIf } from '@angular/common';

import gsap from 'gsap';

@Component({
	selector: 'projects-component',
	templateUrl: 'projects.component.html',
	styleUrls: [ 'projects.component.sass' ],
})
export class ProjectsComponent implements OnInit {
	private toX: any;
	private toY: any;

	public content: any;
	public loading = true;

	constructor(
		private http: HttpClient,
		private renderer: Renderer2
	) {}

	ngOnInit() {
		gsap.set('.radial-blur', {xPercent: -50, yPercent: -50});

		this.toX = gsap.quickTo('.radial-blur', 'x', { duration: 0.6, ease: 'power3' });
		this.toY = gsap.quickTo('.radial-blur', 'y', { duration: 0.6, ease: 'power3' });

		this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
			this.onMouseMove(event);
		});

		this.http.get('./assets/contents/projetos.json').subscribe((response: any) => {
			console.log(response)
            this.content = response;
            this.loading = true;
        });
	}

	public onMouseMove (event: MouseEvent) {
		this.toX(event.clientX);
		this.toY(event.clientY);
	}
}
