import { Component   } from '@angular/core';
import { OnInit      } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
    selector: 'about-component',
    templateUrl: 'about.component.html',
    styleUrls: [ 'about.component.sass' ]
})
export class AboutComponent implements OnInit {

    public content: any;
    public loading = true;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('./assets/contents/sobre-mim.json').subscribe((response: any) => {
            this.content = response;
            this.loading = false;
        });
    }
    
}
