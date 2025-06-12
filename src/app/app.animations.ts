'use strict';

import { group      } from '@angular/animations';
import { style      } from '@angular/animations';
import { query      } from '@angular/animations';
import { animate    } from '@angular/animations';
import { trigger    } from '@angular/animations';
import { transition } from '@angular/animations';


const duration = '0.4s';
const queryMain = style({ top: 0, position: 'relative', overflow: 'hidden' });

const animateIn    = animate(`${duration} ease-out`, style({ 'opacity': '1' }));
const animateOut   = animate(`${duration} ease-out`, style({ 'opacity': '0' }));
const animateLeft  = animate(`${duration} ease-out`, style({ 'transform': 'translate3d(-100%,0%,0)' }));
const animateRight = animate(`${duration} ease-out`, style({ 'transform': 'translate3d(100%,0%,0)'  }));


const positionLeft   = style({ 'display': 'block',      'z-index': '2', 'transform': 'translate3d(-100%,0%,0)' });
const positionRight  = style({ 'display': 'block',      'z-index': '2', 'transform': 'translate3d(100%,0%,0)'  });
const positionCenter = style({ 'left': 0, 'opacity': 1, 'z-index': '1', 'transform': 'translate3d(0%,0%,0)', 'width': '100%', 'position': 'absolute' });

export let AppAnimations = trigger('routerTransition', [
    transition('home => about-me,\
                home => abilities,\
                home => projects,\
                projects => abilities,\
                projects => about-me,\
                abilities => about-me', 
                group([
                    query('main',   [ queryMain ], { optional: true }),
                    query(':enter', [ positionRight, animateIn, animateRight ], { optional: true }),
                    query(':leave', [ positionCenter, animateOut, animateLeft ], { optional: true })
                ])
    ),

    transition('about-me => home,\
                about-me => projects,\
                about-me => abilities,\
                abilities => projects,\
                abilities => home,\
                projects => home', 
                group([
                    query('main',   [ queryMain  ], { optional: true }),
                    query(':enter', [ positionLeft, animateIn, animateLeft ], { optional: true }),
                    query(':leave', [ positionCenter, animateOut, animateRight ], { optional: true })
                ])
    )
]);
