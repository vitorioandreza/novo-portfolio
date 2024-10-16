
import { Component } from '@angular/core';


@Component({
	selector: 'abilities-component',
	templateUrl: 'abilities.component.html',
	styleUrls: [ 'abilities.component.sass' ]
})
export class AbilitiesComponent {
	skill = 'hard';

	toogleSkill() {
		this.skill = this.skill == 'hard' ? 'soft' : 'hard';
	}
}
