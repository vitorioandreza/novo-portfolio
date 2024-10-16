
import { Routes                } from '@angular/router';
import { RouterModule          } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export let PageNotFoundRouting = RouterModule.forChild(<Routes> [
    { path: '', component: PageNotFoundComponent }
]);
