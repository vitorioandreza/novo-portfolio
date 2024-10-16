import { Component   } from '@angular/core';
import { OnInit      } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
	selector: 'projects-component',
	templateUrl: 'projects.component.html',
	styleUrls: [ 'projects.component.sass' ],
})
export class ProjectsComponent implements OnInit {

	public content: any;
	public loading = true;

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.http.get('./assets/contents/projetos.json').subscribe((response: any) => {
            this.content = response;
            this.loading = false;
        });
	}

}
