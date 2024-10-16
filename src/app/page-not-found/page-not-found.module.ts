
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRouting   } from './page-not-found.routing';


@NgModule({
    imports: [
        PageNotFoundRouting,
        CommonModule
    ],
    bootstrap: [ PageNotFoundComponent ],
    declarations: [ PageNotFoundComponent ]
})

export class PageNotFoundModule {}
