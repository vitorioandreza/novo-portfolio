import { Directive, ElementRef, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[animate]'
})
export class AnimateDirective implements OnInit {

    @Input() animate = '';
    @Input() delay = '';

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, 'animate-' + this.animate);
        if (this.delay) this.renderer.addClass(this.element.nativeElement, 'animate-delay-' + this.delay);

        this.applyAnimationScroll()
    }

    @HostListener('window:scroll')
        onEventScroll() {
            this.applyAnimationScroll()
        }

    private applyAnimationScroll() {
        let viewport = window.innerHeight;
        let position = window.pageYOffset;

        let el = this.element.nativeElement;
        let limit = this.element.nativeElement.offsetHeight / 3;

        let offsetTop = el.getBoundingClientRect().top + position;
        let shouldBeVisible = position + viewport >= offsetTop + limit;

        if (shouldBeVisible)
            this.renderer.addClass(el, 'visible')
        else
            this.renderer.removeClass(el, 'visible')
    }

}
