import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
	@Input() users;
	@Input() roles;
	@Input() displayList:boolean;
	constructor() {	}

	ngOnInit(): void {
	}

}
