import { Directive } from '@angular/core';
import { OnInit    } from '@angular/core';
import { Renderer2 } from '@angular/core';

import gsap from 'gsap';

@Directive({
    selector: '[appBlur]'
})
export class BlurDirective implements OnInit {

    private toX: any;
    private toY: any;

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        gsap.set('[appBlur]', {xPercent: -50, yPercent: -50});

        this.toX = gsap.quickTo('[appBlur]', 'x', { duration: 0.6, ease: 'power3' });
        this.toY = gsap.quickTo('[appBlur]', 'y', { duration: 0.6, ease: 'power3' });

        this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
            this.onMouseMove(event);
        });
    }

    public onMouseMove (event: MouseEvent) {
        this.toX(event.clientX);
        this.toY(event.clientY);
    }

}
