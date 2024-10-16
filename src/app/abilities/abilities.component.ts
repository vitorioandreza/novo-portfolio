import { Component   } from '@angular/core';
import { OnInit      } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
	selector: 'abilities-component',
	templateUrl: 'abilities.component.html',
	styleUrls: [ 'abilities.component.sass' ]
})
export class AbilitiesComponent implements OnInit {

	public content: any;
    public loading = true;
    public skill = 'hard';

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('./assets/contents/habilidades.json').subscribe((response: any) => {
            this.content = response;
            this.loading = false;
        });
    }
	
	toogleSkill() {
		this.skill = this.skill == 'hard' ? 'soft' : 'hard';
	}
}
